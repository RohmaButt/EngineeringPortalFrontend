import * as d3 from 'd3'
import {bindPopup, getMaxNodesInDepth} from './chartHelper'

export default function Chart() {
  // Exposed variables
  var attrs = {
    id: 'ID' + Math.floor(Math.random() * 1000000), // Id for event handlings
    svgWidth: 0, // window.innerWidth - 50, //(window.innerWidth * 20) / 100,
    svgHeight: 0, //window.innerHeight - 50, // (window.innerHeight * 20) / 100,
    marginTop: -50,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    container: 'body',
    defaultTextFill: '#2C3E50',
    nodeTextFill: 'white',
    defaultFont: 'Poppins',
    data: null,
    depth: 180,
    duration: 300,
    strokeWidth: 3,
    dropShadowId: null,
    initialZoom: 1,
    onNodeClick: (d) => {
      console.log(d)
    },
  }

  //InnerFunctions which will update visuals
  var updateData

  //Main chart object
  var main = function () {
    //Drawing containers
    var container = d3.select(attrs.container)
    if (container.node() === null) {
      return
    }
    var containerRect = container.node().getBoundingClientRect()
    // if (containerRect.width > 0) attrs.svgWidth = containerRect.width

    setDropShadowId(attrs)

    //Calculated properties
    var calc = {
      id: null,
      chartTopMargin: null,
      chartLeftMargin: null,
      chartWidth: null,
      chartHeight: null,
      nodeMaxWidth: null,
      nodeMaxHeight: null,
    }
    calc.id = 'ID' + Math.floor(Math.random() * 1000000) // id for event handlings
    calc.chartLeftMargin = attrs.marginLeft
    calc.chartTopMargin = attrs.marginTop
    calc.chartWidth = attrs.svgWidth - attrs.marginRight - calc.chartLeftMargin
    calc.chartHeight = attrs.svgHeight - attrs.marginBottom - calc.chartTopMargin
    calc.nodeMaxWidth = d3.max(attrs.data, (d) => d.width)
    calc.nodeMaxHeight = d3.max(attrs.data, (d) => d.height)
    attrs.depth = calc.nodeMaxHeight + 100
    calc.centerX = calc.chartWidth / 2

    //********************  LAYOUTS  ***********************
    const layouts = {
      treemap: null,
    }

    layouts.treemap = d3
      .tree()
      .size([calc.chartWidth, calc.chartHeight])
      .nodeSize([calc.nodeMaxWidth + 100, calc.nodeMaxHeight + attrs.depth])

    // ******************* BEHAVIORS . **********************
    const behaviors = {
      zoom: null,
    }
    behaviors.zoom = d3
      .zoom()
      // .scaleExtent([0.2, 2])
      // .translateExtent([
      //   [-50, -50],
      //   [calc.chartWidth, calc.chartHeight],
      // ])
      .on('zoom', zoomed)

    //****************** ROOT node work ************************
    const root = d3
      .stratify()
      .id(function (d) {
        return d.nodeId
      })
      .parentId(function (d) {
        return d.parentNodeId
      })(attrs.data)

    root.x0 = 0
    root.y0 = 0
    const allNodes = layouts.treemap(root).descendants()
    allNodes.forEach((d) => {
      Object.assign(d.data, {
        directSubordinates: d.data?.directReports != null ? d.data?.directReports : 0,
        totalSubordinates: d.data?.totalHeadcount != null ? d.data?.totalHeadcount : 0,
      })
    })

    if (root.children) {
      root.children.forEach(collapse)
      root.children.forEach(expandSomeNodes)
    }

    //Add svg
    var svg = container
      .patternify({
        tag: 'svg',
        selector: 'svg-chart-container',
      })
      // .attr('width', attrs.svgWidth)
      // .attr('height', attrs.svgHeight)
      .attr('viewBox', `0 0 ${attrs.svgWidth} ${attrs.svgHeight}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('font-family', attrs.defaultFont)
      .call(responsivefy)
      .call(behaviors.zoom)
      .attr('cursor', 'pointer')
      .style('background-color', attrs.backgroundColor)

    //Add sideChart container g element
    // var sideChart = svg
    //   .patternify({
    //     tag: 'g',
    //     selector: 'sideChart',
    //   })
    //   .attr(
    //     'transform',
    //     'translate(' + calc.chartLeftMargin / 1.5 + ',' + calc.chartTopMargin + ')'
    //   )

    // Add foreignObject element for side chart
    const sideChartfo = svg
      .patternify({
        tag: 'foreignObject',
        selector: 'side-chart-foreign-object',
        data: (d) => [d],
      })
      .attr('id', (d) => d.id)
      .attr('width', '100px')
      .attr('height', '100px')
      .attr('overflow', 'visible')
      .attr('transform', 'translate(20,60) scale(0.65)')

    // Add foreign object for side chart
    sideChartfo
      .patternify({
        tag: 'xhtml:div',
        selector: 'side-chart-foreign-object-div',
        data: (d) => [d],
      })
      .style('width', '100px')
      .style('height', '100px')
      .style('color', 'white')
      .html((d) => attrs.data[0].sideTemplate)
      .on('click', function (event, d) {
        bindPopup(attrs.data[0].sideChartData)
      })

    const sideChartfo2 = svg
      .patternify({
        tag: 'foreignObject',
        selector: 'side-chart-foreign-object2',
        data: (d) => [d],
      })
      .attr('id', (d) => d.id)
      .attr('width', '100px')
      .attr('height', '100px')
      .attr('overflow', 'visible')
      .attr('transform', 'translate(220,60) scale(0.65)')

    sideChartfo2
      .patternify({
        tag: 'xhtml:div',
        selector: 'side-chart-foreign-object-div2',
        data: (d) => [d],
      })
      .style('width', '100px')
      .style('height', '100px')
      .style('color', 'white')
      .html((d) => attrs.data[1].sideTemplate)
      .on('click', function (event, d) {
        bindPopup(attrs.data[1].sideChartData)
      })

    //Add container g element
    var chart = svg
      .patternify({
        tag: 'g',
        selector: 'chart',
      })
      .attr(
        'transform',
        'translate(' + calc.chartLeftMargin / 1.5 + ',' + calc.chartTopMargin + ')'
      )

    var centerG = chart
      .patternify({
        tag: 'g',
        selector: 'center-group',
      })
      .attr(
        'transform',
        `translate(${calc.centerX / 1.5},${calc.nodeMaxHeight / 2}) scale(${attrs.initialZoom})`
      )

    // if (attrs.lastTransform) {
    //   console.log('attr.lastTransform', attrs.lastTransform)
    //   behaviors.zoom
    //     .scaleBy(chart, attrs.lastTransform.k)
    //     .translateTo(chart, attrs.lastTransform.x, attrs.lastTransform.y)
    // }

    // Display tree contents
    update(root)

    // Smoothly handle data updating
    updateData = function () {}

    //#########################################  UTIL FUNCS ##################################
    function responsivefy(svg) {
      let aspect = attrs.svgWidth / attrs.svgHeight
      var containerRect = container.node()
      svg
        .attr('viewBox', `0 0 ${attrs.svgWidth} ${attrs.svgHeight}`)
        .attr('preserveAspectRatio', 'xMinYMid')
        .call(resize)
      d3.select(window).on('resize.' + containerRect.id, resize)
      function resize() {
        const w = containerRect.getBoundingClientRect().width
        svg.attr('width', w)
        svg.attr('height', Math.round(w / aspect))
      }
    }

    function setDropShadowId(d) {
      if (d.dropShadowId) return
      let id = d.id + '-drop-shadow'
      //@ts-ignore
      // if (typeof DOM != 'undefined') {
      //     //@ts-ignore
      //     id = DOM.uid(d.id).id;
      // }
      // console.log('d');
      // console.log(d);
      id = d.id
      Object.assign(d, {
        dropShadowId: id,
      })
    }

    function rgbaObjToColor(d) {
      return `rgba(${d.red},${d.green},${d.blue},${d.alpha})`
    }

    // Zoom handler func
    function zoomed(event) {
      var transform = event.transform
      attrs.lastTransform = transform
      if (event.sourceEvent !== null) {
        if (event.sourceEvent.type !== 'dblclick') {
          chart.attr('transform', transform)
        }
      } else chart.attr('transform', transform)
    }

    // Toggle children on click.
    function click(event, d) {
      // debugger;
      //_children is just a temp variable that holds the children when they are hidden. When you click you are either taking children to null and storing the children in the temp variable, or,
      // if children is already null, loading them from the temp variable.
      if (d.children) {
        d._children = d.children
        d.children = null
      } else {
        d.children = d._children
        d._children = null
      }
      update(d)
    }

    function diagonal(s, t) {
      const x = s.x / 1.5
      const y = s.y
      const ex = t.x / 1.5
      const ey = t.y
      let xrvs = ex - x < 0 ? -1 : 1
      let yrvs = ey - y < 0 ? -1 : 1
      let rdef = 35
      let r = Math.abs(ex - x) / 2 < rdef ? Math.abs(ex - x) / 2 : rdef
      r = Math.abs(ey - y) / 2 < r ? Math.abs(ey - y) / 2 : r

      let h = Math.abs(ey - y) / 2 - r
      let w = Math.abs(ex - x) - r * 2
      //w=0;
      const path = `
            M ${x} ${y}
            L ${x} ${y + h * yrvs}
            C  ${x} ${y + h * yrvs + r * yrvs} ${x} ${y + h * yrvs + r * yrvs} ${x + r * xrvs} ${
        y + h * yrvs + r * yrvs
      }
            L ${x + w * xrvs + r * xrvs} ${y + h * yrvs + r * yrvs}
            C ${ex}  ${y + h * yrvs + r * yrvs} ${ex}  ${y + h * yrvs + r * yrvs} ${ex} ${
        ey - h * yrvs
      }
            L ${ex} ${ey}
 `
      return path
    }

    function collapse(d) {
      // console.log('collapse')
      if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
      }
    }

    function expandSomeNodes(d) {
      // console.log('expandSomeNodes')
      if (d.data.expanded) {
        let parent = d.parent
        while (parent) {
          if (parent._children) {
            parent.children = parent._children
            //parent._children=null;
          }
          parent = parent.parent
        }
      }
      if (d._children) {
        d._children.forEach(expandSomeNodes)
      }
    }

    function update(source) {
      ////////////Exceptional case[Sometimes children and _children are not updating in root tree]
      const allNodes = layouts.treemap(root).descendants()
      allNodes.forEach((d) => {
        // console.log('d outside', d)
        if (d.id === source.id) {
          // console.log('inside d', d)
          d.children = source.children
          d._children = source._children
        }
      })
      // console.log('allNodes', allNodes)
      /////////////
      //  Assigns the x and y position for the nodes
      const treeData = layouts.treemap(root)
      // Get tree nodes and links
      // if (getMaxNodesInDepth(treeData) > 50) {
      //   throw new Error('Exception message')
      // }
      const nodes = treeData.descendants().map((d) => {
        if (d.width) {
          return d
        }
        let imageWidth = 100
        let imageHeight = 100
        let imageBorderColor = 'steelblue'
        let imageBorderWidth = 0
        let imageRx = 0
        let imageCenterTopDistance = 0
        let imageCenterLeftDistance = 0
        let borderColor = 'steelblue'
        let backgroundColor = 'steelblue'
        let width = d.data.width
        let height = d.data.height
        let dropShadowId = `none`

        if (d.data.borderColor) {
          borderColor = rgbaObjToColor(d.data.borderColor)
        }
        if (d.data.backgroundColor) {
          backgroundColor = rgbaObjToColor(d.data.backgroundColor)
        }
        return Object.assign(d, {
          imageWidth,
          imageHeight,
          imageBorderColor,
          imageBorderWidth,
          borderColor,
          backgroundColor,
          imageRx,
          width,
          height,
          imageCenterTopDistance,
          imageCenterLeftDistance,
          dropShadowId,
        })
      })

      const links = treeData.descendants().slice(1)

      // Set constant depth for each nodes
      nodes.forEach((d) => (d.y = d.depth * attrs.depth))
      // --------------------------  LINKS ----------------------
      // Update the links...
      var linkSelection = centerG.selectAll('path.link').data(links, function (d) {
        return d.id
      })

      // Enter any new links at the parent's previous position.
      var linkEnter = linkSelection
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function (d) {
          var o = {
            x: source.x0,
            y: source.y0,
          }
          return diagonal(o, o)
        })

      // UPDATE
      var linkUpdate = linkEnter.merge(linkSelection)

      // Styling links
      linkUpdate
        .attr('fill', 'none')
        .attr('stroke-width', (d) => d.data.connectorLineWidth || 2)
        .attr('stroke', (d) => {
          if (d.data.connectorLineColor) {
            return rgbaObjToColor(d.data.connectorLineColor)
          }
          return 'green'
        })
        .attr('stroke-dasharray', (d) => {
          if (d.data.dashArray) {
            return d.data.dashArray
          }
          return ''
        })

      // Transition back to the parent element position
      linkUpdate
        .transition()
        .duration(attrs.duration)
        .attr('d', function (d) {
          return diagonal(d, d.parent)
        })

      // Remove any exiting links
      var linkExit = linkSelection
        .exit()
        .transition()
        .duration(attrs.duration)
        .attr('d', function (d) {
          // console.log('linkExit', d)
          var o = {
            x: source.x,
            y: source.y,
          }
          return diagonal(o, o)
        })
        .remove()

      // --------------------------  NODES ----------------------
      // Updating nodes
      const nodesSelection = centerG.selectAll('g.node').data(nodes, (d) => d.id)
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = nodesSelection
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function (d) {
          return 'translate(' + source.x0 / 1.5 + ',' + source.y0 + ')'
        })
        .attr('id', (d) => d.id)
        .attr('cursor', 'pointer')
        .on('click', function (event, d) {
          if (event.srcElement.classList.contains('node-button-circle')) {
            return
          }
          attrs.onNodeClick(d.data.nodeId)
        })
        // .on('mouseenter', function (event, d) {
        //   console.log('asasa', event, d, source)
        //   event.target.setAttribute(
        //     'transform',
        //     'translate(' + d.x0 / 1.5 + ',' + d.y0 + ') scale(1.5)'
        //   )
        // })
        // .on('mouseleave', function (event, d) {
        //   event.target.setAttribute('transform', 'translate(' + d.x0 / 1.5 + ',' + d.y0 + ')')
        // })
        .on('click', function (event, d) {
          if (!event.srcElement.classList.contains('node-button-circle')) {
            bindPopup(d.data)
          }
        })

      // Add rectangle for the nodes
      nodeEnter
        .patternify({
          tag: 'rect',
          selector: 'node-rect',
          data: (d) => [d],
        })
        .attr('width', 1e-6)
        .attr('height', 1e-6)
        .style('fill', function (d) {
          return d._children ? '#73c0ce' : '#33b6d0'
        })

      // Add foreignObject element
      const fo = nodeEnter
        .patternify({
          tag: 'foreignObject',
          selector: 'node-foreign-object',
          data: (d) => [d],
        })
        .attr('id', (d) => d.id)
        .attr('width', (d) => d.width)
        .attr('height', (d) => d.height)
        .attr('x', (d) => -d.width / 2 + 10)
        .attr('y', (d) => -d.height / 2)
        .attr('overflow', 'visible')
        .on('mouseenter', function (event, d) {
          if (d.children || d._children)
            event.target.nextElementSibling.setAttribute('opacity', 0.25)
          d3.selectAll('.link').attr('opacity', 0.25)
          d3.selectAll('.node')
            .filter((x) => x.id !== event.target.id)
            .attr('opacity', 0.25)
        })
        .on('mouseleave', function (event, d) {
          if (d.children || d._children) event.target.nextElementSibling.setAttribute('opacity', 1)
          d3.selectAll('.link').attr('opacity', 1)
          d3.selectAll('.node').attr('opacity', 1)
        })

      // Add foreign object
      fo.patternify({
        tag: 'xhtml:div',
        selector: 'node-foreign-object-div',
        data: (d) => [d],
      })
        .style('width', (d) => d.width + 'px')
        .style('height', (d) => d.height + 'px')
        .style('color', 'white')
        .html((d) => d.data.template)

      // // Add foreignObject element for side chart
      // const sideChartfo = sideChart
      //   .patternify({
      //     tag: 'foreignObject',
      //     selector: 'side-chart-foreign-object',
      //     data: (d) => [d],
      //   })
      //   .attr('id', (d) => d.id)
      //   .attr('width', '300px')
      //   .attr('height', '300px')
      //   .attr('overflow', 'visible')

      // // Add foreign object for side chart
      // sideChartfo
      //   .patternify({
      //     tag: 'xhtml:div',
      //     selector: 'side-chart-foreign-object-div',
      //     data: (d) => [d],
      //   })
      //   .style('width', '300px')
      //   .style('height', '300px')
      //   .style('color', 'white')
      //   .html((d) => attrs.data[0].sideTemplate)

      // Node images
      // const nodeImageGroups = nodeEnter.patternify({
      //   tag: 'g',
      //   selector: 'node-image-group',
      //   data: (d) => [d],
      // })

      // // Node image rectangle
      // nodeImageGroups.patternify({
      //   tag: 'rect',
      //   selector: 'node-image-rect',
      //   data: (d) => [d],
      // })

      // Node button circle group
      const nodeButtonGroups = nodeEnter
        .patternify({
          tag: 'g',
          selector: 'node-button-g',
          data: (d) => [d],
        })
        .on('click', click)

      // Add button circle
      nodeButtonGroups.patternify({
        tag: 'circle',
        selector: 'node-button-circle',
        data: (d) => [d],
      })

      // Add button text
      nodeButtonGroups
        .patternify({
          tag: 'text',
          selector: 'node-button-text',
          data: (d) => [d],
        })
        .attr('pointer-events', 'none')

      // Node update styles
      var nodeUpdate = nodeEnter.merge(nodesSelection).style('font', '12px Poppins')
      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .attr('opacity', 0)
        .duration(attrs.duration)
        .attr('transform', function (d) {
          return 'translate(' + d.x / 1.5 + ',' + d.y + ')'
        })
        .attr('opacity', 1)

      // Move images to desired positions
      // nodeUpdate.selectAll('.node-image-group').attr('transform', (d) => {
      //   let x = -d.imageWidth / 2 - d.width / 2
      //   let y = -d.imageHeight / 2 - d.height / 2
      //   return `translate(${x / 1.5},${y})`
      // })

      nodeUpdate
        .select('.node-image-rect')
        .attr('fill', (d) => `url(#${d.id})`)
        .attr('width', (d) => d.imageWidth)
        .attr('height', (d) => d.imageHeight)
        .attr('stroke', (d) => d.imageBorderColor)
        .attr('stroke-width', (d) => d.imageBorderWidth)
        .attr('rx', (d) => d.imageRx)
        .attr('y', (d) => d.imageCenterTopDistance)
        .attr('x', (d) => d.imageCenterLeftDistance)
        .attr('filter', (d) => d.dropShadowId)

      // Update  node attributes and style
      nodeUpdate
        .select('.node-rect')
        .attr('width', (d) => d.data.width)
        .attr('height', (d) => d.data.height)
        .attr('x', (d) => -d.data.width / 2)
        .attr('y', (d) => -d.data.height / 2)
        .attr('rx', (d) => d.data.borderRadius || 0)
        .attr('stroke-width', (d) => d.data.borderWidth || attrs.strokeWidth)
        .attr('cursor', 'pointer')
        .attr('stroke', (d) => d.borderColor)
        .style('fill', (d) => d.backgroundColor)

      // Move node button group to the desired position
      nodeUpdate
        .select('.node-button-g')
        .attr('transform', (d) => {
          return `translate(0,${d.data.height / 2})`
        })
        .attr('opacity', (d) => {
          // console.log('d opacity', d)
          if (d.children || d._children) {
            return 1
          }
          return 0
        })

      // Restyle node button circle
      nodeUpdate
        .select('.node-button-circle')
        .attr('r', 16)
        .attr('stroke-width', (d) => d.data.borderWidth || attrs.strokeWidth)
        .attr('fill', '#b8b4b4')
        .attr('stroke', (d) => d.borderColor)

      // Restyle texts
      nodeUpdate
        .select('.node-button-text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', attrs.defaultTextFill)
        .attr('font-size', (d) => {
          if (d.children) return 40
          return 26
        })
        .text((d) => {
          if (d.children) return '-'
          return '+'
        })

      // Remove any exiting nodes
      var nodeExitTransition = nodesSelection
        .exit()
        .attr('opacity', 1)
        .transition()
        .duration(attrs.duration)
        .attr('transform', function (d) {
          return 'translate(' + source.x / 1.5 + ',' + source.y + ')'
        })
        .on('end', function () {
          // console.log('end', d3.select(this))
          d3.select(this).remove()
        })
        .attr('opacity', 0)

      // On exit reduce the node rects size to 0
      nodeExitTransition
        .selectAll('.node-rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('x', 0)
        .attr('y', 0)

      // On exit reduce the node image rects size to 0
      nodeExitTransition
        .selectAll('.node-image-rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('x', (d) => d.width / 2)
        .attr('y', (d) => d.height / 2)

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x
        d.y0 = d.y
      })
      ResponsivenessForChart(layouts.treemap(root))
    }

    document.getElementById('reset_Btn').addEventListener('click', function centreTree() {
      ResponsivenessForChart(layouts.treemap(root))
    })

    function scalingOrgChart(svg) {
      console.log('svg attrs', attrs.svgWidth, attrs.svgHeight)
      let aspect = attrs.svgWidth / attrs.svgHeight
      var containerRect = container.node()
      console.log('svg', svg)
      console.log('containerRect', containerRect)
      console.log('aspect', attrs.svgWidth, attrs.svgHeight, aspect)
      svg
        .attr('viewBox', `0 0 ${attrs.svgWidth} ${attrs.svgHeight}`)
        .attr('preserveAspectRatio', 'xMinYMid')
        .call(resize)
      d3.select(window).on('resize.' + containerRect.id, resize)
      function resize() {
        const w = containerRect.getBoundingClientRect().width
        svg.attr('width', w)
        svg.attr('height', Math.round(w / aspect))
      }
    }

    function ResponsivenessForChart(treeData) {
      let zoom = behaviors.zoom
      let transform = d3.zoomIdentity //Default zoom values
      let maxNodesinDepth = getMaxNodesInDepth(treeData)

      let deptthOfChart = treeData.descendants()[treeData.descendants().length - 1].depth
      let translateX = 0
      let translateY = 0
      let scaleZoom = 0
      const scaleZero = 0
      const scaleOne = 13
      const scaleTwo = 26
      const scaleThree = 39
      const scaleFour = 52

      const zoomScaleStandard = 1
      const zoomScaleOneAndHalf = 1.5
      const zoomScaleOneAndTwoHalf = 1.25
      const zoomScaleHalf = 0.5
      const zoomScaleTw0 = 2
      const zoomScaleSevenFive = 0.75
      const zoomScaleEifghtFive = 0.85

      switch (deptthOfChart) {
        case 0:
        case 1:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //CEO
            translateX = 200
            translateY = 0
            scaleZoom = 1.15
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            translateX = 400
            translateY = 0
            scaleZoom = 0.8
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 0
            translateY = 0
            scaleZoom = 0.82
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = 0
            scaleZoom = 0.835
          } else {
            translateX = 0
            translateY = 0
            scaleZoom = zoomScaleOneAndHalf
          }
          break
        case 2:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //  Alper,
            translateX = 218
            translateY = 0
            scaleZoom = 1.15
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            translateX = 0
            translateY = 50
            scaleZoom = 1
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.82
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.835
          } else {
            translateX = 0
            translateY = 5
            scaleZoom = 0.95
          }
          break
        case 3:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            // Rohma   Firat, phil,Betsy, John everson
            translateX = 100
            translateY = -50
            scaleZoom = 1.25
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            //Ain
            translateX = 600
            translateY = 0
            scaleZoom = zoomScaleHalf
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 600
            translateY = 50
            scaleZoom = 0.45
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 750
            translateY = 50
            scaleZoom = 0.3
          } else {
            translateX = 600
            translateY = -50
            scaleZoom = 0.3
          }
          break
        case 4:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //john beradi
            translateX = 400
            translateY = -5
            scaleZoom = 0.9
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            //john  everson
            translateX = 850
            translateY = 0
            scaleZoom = 0.6
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 400
            translateY = 0
            scaleZoom = 0.45
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 400
            translateY = 0
            scaleZoom = 0.9
          } else {
            translateX = 500
            translateY = 0
            scaleZoom = 0.68
          }
          break
        case 5:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //Betsy, tom.aiken
            translateX = 400
            translateY = -50
            scaleZoom = 0.8
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            //james elmore
            translateX = 400
            translateY = -50
            scaleZoom = 0.75
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 400
            translateY = 50
            scaleZoom = 0.5
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = -50
            scaleZoom = 0.8
          } else {
            translateX = 500
            translateY = -50
            scaleZoom = 0.6
          }
          break
        case 6:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //kashif pervaiz
            translateX = 400
            translateY = 0
            scaleZoom = 0.6
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            //phil
            translateX = 700
            translateY = 0
            scaleZoom = 0.3
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.45
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = -50
            scaleZoom = 0.9
          } else {
            //Ain All
            translateX = 0
            translateY = 0
            scaleZoom = 0.0125
          }
          break
        case 7:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //
            translateX = 400
            translateY = -50
            scaleZoom = 0.8
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.7
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.45
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = -50
            scaleZoom = 0.9
          } else if (maxNodesinDepth > scaleFour && maxNodesinDepth <= 146) {
            //james elmore all, yasir zamir
            translateX = 900
            translateY = 200
            scaleZoom = 0.06
          } else {
            //Ain All
            translateX = 900
            translateY = 200
            scaleZoom = 0.04
          }
          break
        case 8:
          if (maxNodesinDepth >= scaleZero && maxNodesinDepth <= scaleOne) {
            //
            translateX = 400
            translateY = -50
            scaleZoom = 0.8
          } else if (maxNodesinDepth > scaleOne && maxNodesinDepth <= scaleTwo) {
            translateX = 400
            translateY = 50
            scaleZoom = 0.7
          } else if (maxNodesinDepth > scaleTwo && maxNodesinDepth <= scaleThree) {
            translateX = 0
            translateY = 50
            scaleZoom = 0.45
          } else if (maxNodesinDepth > scaleThree && maxNodesinDepth <= scaleFour) {
            translateX = 0
            translateY = -50
            scaleZoom = 0.9
          } else if (maxNodesinDepth > scaleFour && maxNodesinDepth <= 127) {
            translateX = 900
            translateY = 200
            scaleZoom = 0.075
          } else {
            //Hassan All, CEO all
            translateX = 900
            translateY = 200
            scaleZoom = 0.04
          }
          break
        default:
          translateX = 400
          translateY = -50
          scaleZoom = 0.75
          break
      }
      console.log({deptthOfChart, maxNodesinDepth})
      console.log({translateX, translateY, scaleZoom})
      transform = d3.zoomIdentity.translate(translateX, translateY).scale(scaleZoom) //Cutomized Zoom values as 'Fit to content'
      svg.call(zoom.transform, transform)

      // let chartNode = d3.select('.chart').node()
      // var bounds = chartNode.getBBox()
      // var parent = chartNode.parentElement
      // var fullWidth = container.node().getBoundingClientRect().width, //  attrs.svgWidth,
      //   fullHeight = container.node().getBoundingClientRect().height //attrs.svgHeight
      // var width = bounds.width,
      //   height = bounds.height
      // var midX = bounds.x + width / 2,
      //   midY = bounds.y + height / 2
      // console.log('dd', chartNode.getBBox(), chartNode.parentElement)
      // console.log('dd', fullWidth, fullHeight, width, height, midX, midY)
      // var scale = 1 / Math.max(width / fullWidth, height / fullHeight)
      // var translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY]
      // console.trace('zoomFit', translate, scale)

      // `translate(${calc.centerX / 1.5},${calc.nodeMaxHeight / 2}) scale(${attrs.initialZoom})`

      // transform = d3.zoomIdentity
      //   .translate(fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY)
      //   .scale(scale)
      // console.log('transform', transform)
      // svg.call(zoom.transform, transform)

      // ///////////
      // // console.log('svg attrs', attrs.svgWidth, attrs.svgHeight).
      // let width = document.getElementsByClassName('chart')[0].getBoundingClientRect().width
      // let height = document.getElementsByClassName('chart')[0].getBoundingClientRect().height
      // let aspect = width / height // attrs.svgWidth / attrs.svgHeight
      // var containerRect = d3.select('.chart').node() //container.node()
      // console.log('svg', svg)
      // console.log('containerRect', containerRect)
      // console.log('aspect', width, height, aspect)
      // //   svg
      // //     .attr('viewBox', `0 0 ${attrs.svgWidth} ${attrs.svgHeight}`)
      // //    .attr('preserveAspectRatio', 'xMinYMid')
      // //   .call(resize)
      // //  d3.select(window).on('resize.' + containerRect.id, resize)
      // //  function resize() {

      // const w = containerRect.getBoundingClientRect().width
      // console.log('w', w)
      // // chart.attr('width', '1436.390625')
      // // chart.attr('height', '706')
      // // chart.attr('transform', 'translate(200, 4)')
      // chart.attr('width', w)
      // chart.attr('height', Math.round(w / aspect))
      // //  }
    }
  }

  //----------- PROTOTYPE FUNCTIONS  ----------------------
  d3.selection.prototype.patternify = function (params) {
    var container = this
    var selector = params.selector
    var elementTag = params.tag
    var data = params.data || [selector]

    // Pattern in action
    var selection = container.selectAll('.' + selector).data(data, (d, i) => {
      if (typeof d === 'object') {
        if (d.id) {
          return d.id
        }
      }
      return i
    })
    selection.exit().remove()
    selection = selection.enter().append(elementTag).merge(selection)
    selection.attr('class', selector)
    return selection
  }

  //Dynamic keys functions
  Object.keys(attrs).forEach((key) => {
    // Attach variables to main function
    //@ts-ignore
    main[key] = function (_) {
      var string = `attrs['${key}'] = _`
      //      console.log('mainkey');

      if (!arguments.length) {
        return eval(` attrs['${key}'];`)
      }
      //     console.log(string);
      eval(string)
      return main
    }
    return main
  })

  //Set attrs as property
  //@ts-ignore
  // console.log(attrs);
  main['attrs'] = attrs

  //Exposed update functions
  //@ts-ignore
  main['data'] = function (value) {
    if (!arguments.length) return attrs.data
    attrs.data = value
    if (typeof updateData === 'function') {
      //    console.log('main updateData');
      updateData()
    }
    return main
  }

  // Run  visual
  //@ts-ignore
  main['render'] = function () {
    main()
    return main
  }
  return main
}
