import { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react'
import axios from 'axios'
import { FeedbackButton } from '../../shared/FeedbackButton/FeedbackButton'
import { getToken ,getUser} from '../../../../app/modules/auth/Common.ts'
import { ReactComponent as LoadingIcon } from "../../../../_metronic/assets/logos/loading.svg"

function Relationships() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_MGT_API_URL
  axios.defaults.headers.common['portal-token-key'] = getToken()
  axios.defaults.headers.common['portal-user-name'] = getUser()
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.mode = 'cors'
  const [graph, setOptions] = useState([])
  const [error, setError] = useState('')
  const [backdrop, setBackdrop] = useState(false)

  // Get screen size
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  // end screen size

  useEffect(() => {
    async function getGraphData() {
      setBackdrop(true)
      await axios
        .get(`MGT/GetRelationships`, {})
        .then((response) => {
          let data = JSON.parse(response.data)
          data.nodes.forEach(function (node) {
            node.label = { "show": true }
          }
          )
          setOptions(data)
          setBackdrop(false)
        })
        .catch(function (error) {
          if (error) {
            setError('Something went wrong. Error in loading data from server. Please refresh.')

            console.error('error', error)
            setBackdrop(false)
          }
        })
    }
    getGraphData()
  }, [])

  let goption = {
    title: {
      text: '',
      subtext: '',
      top: 'bottom',
      left: 'right',
    },
    tooltip: {},
    legend: [
      {
        x: 'left',
        orient: 'vertical',
        data: graph?.categories?.map(function (a) {
          return a.name
        }),
      },
    ],
    animationDurationUpdate: '1500',
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: '',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true,
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        emphasis: {
          focus: 'adjacency',
        },
        label: {
          position: 'right',
          formatter: '{b}',
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
        },
      },
    ],
  }

  return (
    <>
      {backdrop && <div>
            <LoadingIcon width={24} height={24} />
          </div>}
      <div className='page-wrapper'>
        {/* <TopScroller/> */}
        <title>Relationships</title>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h4>Relationships</h4>
              </div>
            </div>
          </div>
          <FeedbackButton
            link='https://forms.monday.com/forms/88f9120bdece660501251463d9a964ea?r=use1'
            containerStyle={{
              position: 'absolute',
              right: '56px',
              top: '90px',
              zIndex: 9,
              opacity: 0.3,
            }}
          />
          {
            <div className='App'>
              <ReactEcharts option={goption} style={{ height: screenSize.dynamicHeight - 200 }} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Relationships
