import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import PptxGenJS from 'pptxgenjs'

export function exportOrgChart() {
  saveSvg()
}

function getSVGString(svgNode) {
  svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink')
  var cssStyleText = getCSSStyles(svgNode)
  appendCSS(cssStyleText, svgNode)

  var serializer = new XMLSerializer()
  var svgString = serializer.serializeToString(svgNode)
  svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink=') // Fix root xlink without namespace
  svgString = svgString.replace(/NS\d+:href/g, 'xlink:href') // Safari NS namespace fix

  return svgString

  function appendCSS(cssText, element) {
    var styleElement = document.createElement('style')
    styleElement.setAttribute('type', 'text/css')
    styleElement.innerHTML = cssText
    var refNode = element.hasChildNodes() ? element.children[0] : null
    element.insertBefore(styleElement, refNode)
  }
  function getCSSStyles(parentElement) {
    var selectorTextArr = []

    // Add Parent element Id and Classes to the list
    selectorTextArr.push('#' + parentElement.id)
    for (var c = 0; c < parentElement.classList.length; c++)
      if (!contains('.' + parentElement.classList[c], selectorTextArr))
        selectorTextArr.push('.' + parentElement.classList[c])

    // Add Children element Ids and Classes to the list
    var nodes = parentElement.getElementsByTagName('*')
    for (var i = 0; i < nodes.length; i++) {
      var id = nodes[i].id
      if (!contains('#' + id, selectorTextArr)) selectorTextArr.push('#' + id)

      var classes = nodes[i].classList
      for (var c = 0; c < classes.length; c++)
        if (!contains('.' + classes[c], selectorTextArr)) selectorTextArr.push('.' + classes[c])
    }

    // Extract CSS Rules
    var extractedCSSText = ''
    for (var i = 0; i < document.styleSheets.length; i++) {
      var s = document.styleSheets[i]

      try {
        if (!s.cssRules) continue
      } catch (e) {
        if (e.name !== 'SecurityError') throw e // for Firefox
        continue
      }

      var cssRules = s.cssRules
      for (var r = 0; r < cssRules.length; r++) {
        if (includes(cssRules[r].selectorText, selectorTextArr))
          extractedCSSText += cssRules[r].cssText
      }
    }

    return extractedCSSText

    function contains(str, arr) {
      return arr.indexOf(str) === -1 ? false : true
    }
  }
  function includes(str, arr) {
    if ('undefined' !== typeof str) {
      for (var q = 0; q < arr.length; q++) {
        if (str.indexOf(arr[q]) !== -1) {
          return true
        }
      }
    }
  }
}

async function saveSvg() {
  //https://gist.github.com/rokotyan/0556f8facbaf344507cdc45dc3622177
  var svgString = getSVGString(document.getElementsByClassName('svg-chart-container')[0])
  let svgBlob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'})
  let url = URL.createObjectURL(svgBlob)
  let a = document.createElement('a')
  a.setAttribute('download', 'OrgChart.svg')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.click()
}

export async function exportPopupsToPDF() {
  console.group('exportPopupsToPDF')
  console.time()
  let popUps = document.getElementById('printable')
  let pdf = new jsPDF('p', 'pt', 'letter')
  pdf.setPage(1) // now we declare that we're working on that page
  pdf.text(20, 20, 'Afiniti Employee Cards')
  let o = 0
  await html2canvas(popUps, {
    useCORS: true,
    // eslint-disable-next-line no-loop-func
  }).then(function (canvas) {
    let canvasDataURL = canvas.toDataURL('image/png', 1.0)
    let width = canvas.width
    let height = canvas.clientHeight
    pdf.addImage(canvasDataURL, 'PNG', 50, 40 + o, width * 0.62, height * 0.62) // add content to the page
    o = o + 150
    console.log('printing')
    pdf.save('AfinitiEmployeeCards.pdf')
  })
  console.timeEnd()
  console.groupEnd('converted')
}

export async function exportPopupsToPPT() {
  console.group('exportPopupsToPPT')
  console.time()
  let pres = new PptxGenJS()
  await html2canvas(document.getElementById('printable'), {
    useCORS: true,
  }).then(function (canvas) {
    let canvasDataURL = canvas.toDataURL('image/png', 1.0)
    let slide = pres.addSlide()
    slide.addImage({
      data: canvasDataURL,
      x: 2,
      y: 0.25,
      w: 6.0,
      h: 5.0,
    })
    console.log('printing')
    pres.writeFile({fileName: 'AfinitiEmployeeCards.pptx'})
  })
  console.timeEnd()
  console.groupEnd('converted')
}

/*export async function exportPopupsToPDF() {
  console.group('exportPopupsToPDF')
  console.time()
  let popUps = [...document.getElementsByClassName('tooltip-chart')]
  let pdf = new jsPDF('p', 'pt', 'letter')
  pdf.setPage(1) // now we declare that we're working on that page
  pdf.text(20, 20, 'Afiniti Employee Cards')
  let o = 0
  for (let ele = 0; ele < popUps.length; ele++) {
    await html2canvas(document.getElementsByClassName('tooltip-chart')[ele], {
      useCORS: true,
      // eslint-disable-next-line no-loop-func
    }).then(function (canvas) {
      let canvasDataURL = canvas.toDataURL('image/jpeg', 1.0)
      let width = canvas.width
      let height = canvas.clientHeight
      pdf.addImage(canvasDataURL, 'JPG', 50, 40 + o, width * 0.62, height * 0.62) // add content to the page
      o = o + 150
      if (ele === popUps.length - 1) {
        console.log('printing')
        pdf.save('AfinitiEmployeeCards.pdf')
      }
    })
  }
  console.timeEnd()
  console.groupEnd('converted')
}

export async function exportPopupsToPPT() {
  console.group('exportPopupsToPPT')
  console.time()
  let popUps = [...document.getElementsByClassName('tooltip-chart')]
  let pres = new PptxGenJS()
  for (let ele = 0; ele < popUps.length; ele++) {
    await html2canvas(document.getElementsByClassName('tooltip-chart')[ele], {
      useCORS: true,
    }).then(function (canvas) {
      let canvasDataURL = canvas.toDataURL('image/png', 1.0)
      let slide = pres.addSlide()
      let textboxText = 'Afiniti Employee Cards'
      let textboxOpts = {x: 1, y: 1, color: '363636'}
      slide.addText(textboxText, textboxOpts)
      slide.addImage({
        data: canvasDataURL,
        x: 2,
        y: 2,
        w: 6.0,
        h: 1.5,
      })
      if (ele === popUps.length - 1) {
        console.log('printing')
        pres.writeFile({fileName: 'AfinitiEmployeeCards.pptx'})
      }
    })
  }
  console.timeEnd()
  console.groupEnd('converted')
}
*/
