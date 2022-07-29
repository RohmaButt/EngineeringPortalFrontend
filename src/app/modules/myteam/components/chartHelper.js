import ReactDOM from 'react-dom'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import EmployeeProfilePopup from './EmployeeProfilePopup'
import {defaultImageSvg} from '../../../../setup/appConstants'
import ChartCardTemplate from './ChartCardTemplate'
import '../../../modules/assets/myTeam/orgChart.scss'

export function cleanUp() {
  removePrintableDiv()
  ;[].forEach.call(document.querySelectorAll('.tooltip-chart'), function (el) {
    el.remove()
  })
  sessionStorage.removeItem('chartEmail')
}

export function getAvatarbase64() {
  return 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuc1hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxTcGFjZT0icHJlc2VydmUiIHhtbG5zU2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+PHJlY3QgaWQ9IlJvYm90XzEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMTAwMCIgc3R5bGU9ImZpbGw6IzAwMDAyNjsiLz48Y2lyY2xlIGN4PSI0MDMuNzM2IiBjeT0iNTU2LjUxOCIgcj0iMTc2LjI1NSIgc3R5bGU9ImZpbGw6IzBmZjtmaWxsLW9wYWNpdHk6MC4xNDkwMjsiLz48Y2lyY2xlIGN4PSI2ODEuMzY2IiBjeT0iNDQwLjkwNSIgcj0iMTAxLjM3NSIgc3R5bGU9ImZpbGw6I2YwZjtmaWxsLW9wYWNpdHk6MC4xNDkwMjsiLz48cGF0aCBkPSJNNDU4LjY2NSw3NjguNDYxYy0wLjU5OCwtMC4yOTkgLTEuMjQ2LC0wLjc2NiAtMi4yMDMsLTEuNjQzbC02My44MzMsLTYzLjgzMmMtMi4zMTMsLTIuNTI1IC0yLjM0MSwtMi43MzIgLTIuNDgzLC01Ljk5NWwwLC04MS4yOTRjMC4yMDksLTQuNzkgNC4yOTEsLTguNjYxIDkuMjE3LC04LjQ0NmM0LjI2NiwwLjU2MiA3LjU1LDQuMTI1IDcuNzM5LDguNDQ2bDAsMjYuMTIxYzAuNDMzLDAuMjg3IDAuODQyLDAuNjEzIDEuMjIyLDAuOTc0bDU5Ljc4Niw1OS43ODZjMy40OTMsMy42OCAzLjAyNCwxMC4yNDcgLTEuMzc3LDEzLjEwNWMtMy4yMjMsMi4wOTMgLTcuNzg5LDEuNTY1IC0xMC42MTMsLTEuMTE1bC00OS4wMTgsLTQ5LjAxOGwwLDI3LjkyOWw2MS4zNSw2MS4zNDljMCwwIDAuNTgzLDAuNDMzIDEuMzQ3LDEuNzU2YzAuMTA0LDAuMTgxIDAuMTk5LDAuMzY0IDAuMjg1LDAuNTVjNC40OTUsLTIuNTQ3IDkuNjQsLTMuOTggMTQuOTE5LC0zLjk2YzE0LjU0NywwLjEyNyAyOC4wNTMsMTIuMDg3IDI5LjYzNiwyNi43NTdjMS4zNzQsMTIuNzQ0IC02LjM5NywyNS45OTMgLTE4LjMxNywzMC45NTZjLTEwLjcxOSw0LjQ2MiAtMjMuOTU2LDEuOTY3IC0zMi4zMzksLTYuMTJjLTkuMDY5LC04Ljc0OCAtMTEuNzMzLC0yMy41MDMgLTYuMDUxLC0zNC45MjhjMC4yMzIsLTAuNDY3IDAuNDc3LC0wLjkyNiAwLjczMywtMS4zNzhabTI2LjA0OSwwLjAxM2MtOS42MzQsMC4wODQgLTE3LjYzOCwxMS40ODMgLTEzLjIzNywyMC45MDhjMy43NTksOC4wNDkgMTUuNjIzLDExLjAzNCAyMi43NDgsNS4wODRjNi4wNDksLTUuMDUyIDYuODg3LC0xNS4yOCAxLjQwOCwtMjEuMjM2Yy0yLjc2MywtMy4wMDIgLTYuNzU0LC00Ljc3MyAtMTAuOTE5LC00Ljc1NlptMTA4LjE4OSwtODkuNjcyYzEuNTExLDAuMTMzIDEuNzU1LDAuMjYgMi40MDcsMC40OTdjMi45MzUsMS4wNjkgNS4xNTYsMy44NTcgNS41MjEsNi45ODNjMC4wNTEsMC40MzYgMC4wNDUsMC41NDYgMC4wNTgsMC45ODRsMCw0MC43MzljLTAuMDYzLDIuMjQzIC0wLjk1LDQuMzczIC0yLjQ4NCw1Ljk5NWwtMzMuMDMxLDMzLjAzMmMtNC42MzgsNC4zNzUgLTEzLjgyOSwxLjc0NSAtMTQuNDQxLC01LjI1NmMtMC4xODcsLTIuMTMyIDAuNDcsLTQuMzIyIDEuNzk1LC01Ljk5N2MwLjI3MiwtMC4zNDQgMC4zNTUsLTAuNDE4IDAuNjU2LC0wLjczN2wzMC41NDgsLTMwLjU0OGwwLC0zNy4yMjhjMCwwIDAuNDAyLC00LjAzNSAyLjY2LC02LjE2N2MxLjMxOCwtMS4yNDIgMy4wNCwtMi4wNDQgNC44MzQsLTIuMjU0YzAuOTQ3LC0wLjExIDEuMTczLC0wLjA1MSAxLjQ3NywtMC4wNDNabS0yOTAuNjI5LC0yMTkuMzc1bC00MC43MTUsLTYxLjk2N2MtMC44MTksLTEuNjI5IC0xLjE5LC0yLjAxNSAtMS40MTMsLTMuODYyYy0wLjM3MywtMy4wODcgMC4yNjcsLTQuNTYyIDAuNTE1LC02LjUyNmM2LjczMSwtNTMuMTcxIDMxLjEzNywtMTA0LjM4OSA3MC45MTUsLTE0MC4yODhjNDUuNDExLC00MC45ODEgMTA4LjY0NiwtNTkuNTY3IDE2OS41NDYsLTU5Ljg2M2MwLjYwMywtMC4wMDEgMS4yMDcsLTAuMDAyIDEuODExLC0wLjAwMmMxNC4xMDQsMC4wNDUgMjguMjEzLDAuOTIyIDQyLjI0MywyLjU1OWMxLjA1NSwwLjEyNCAxLjgxOCwwLjE4MiAyLjkwNywwLjU2N2MxLjY5MywwLjU5OSAxLjk4NSwxLjAyMSAzLjM2MiwyLjEyMWwzOSwzOWMwLjY2NiwwLjkxNyAxLjE3LDEuNTA1IDEuNTU4LDIuMTJjMzcuNDcsNi4wMTUgNzMuMTI3LDIzLjEgMTAwLjkxMyw0OC44ODljMzIuODIzLDMwLjQ2NSA1NC42MDcsNzIuNzA2IDYwLjA1NCwxMTcuMjI2YzAuMDA4LDAuMDI0IDAuMTIzLDAuNzY1IDAuMjAyLDEuMjY2YzQuNTE1LDI5LjA2MyA3LjQ3Myw1OC41NzEgMTYuNjgzLDg2LjM3YzIuMjQxLDYuNzYzIDQuOTM0LDEzLjM3MiA4LjI4MywxOS42NzZjMCwwIDIuOTUsNS45NjggMy45NTUsMTEuMzYxYzIuMjI0LDExLjkzMyAtMS4zNTksMjQuNzgzIC05LjM5OCwzMy45NTZjLTI2LjgzNCwzMC4xNjEgLTQ0LjQzOCw2Ni41NiAtNTUuNzksMTA1LjE2Yy0zLjc0NCwxMi43MzIgLTguOTk4LDI2LjA0IC0yMi44NDYsMzAuMzc5Yy0xMS41MTksMy42MDkgLTI0LjExNCwxLjUyNCAtMzUuMTQ2LC0xLjM5NWwtMTEwLjg3NSwtMzkuMzU1bDAsMzEuODYxYy0wLjE1MSw2LjUwNSAtOC45MzcsMTEuMDU0IC0xNC4xOSw2LjI2NWMtMS43MzcsLTEuNTgzIC0yLjcxMiwtMy44OTIgLTIuNzY3LC02LjI2NWwwLC0zNy44OGwtOTMuMzc0LC0zMy4xNDNjLTAuNTMyLC0wLjE1MyAtMS4wNjQsLTAuMzEgLTEuNTk2LC0wLjQ2N2MtNjQuNDg0LC0xOS4yOTIgLTExNi41NjgsLTczLjk0MyAtMTMyLjE1OCwtMTM5Ljg5NGMtMC42MTcsLTIuNjExIC0xLjE3NywtNS4yMzUgLTEuNjc5LC03Ljg2OVptNDE3LjQzOCwxMzguNDMzYzkuNjI5LC0xOS42NSAyMS40MjIsLTM4LjE1OSAzNS44OTgsLTU0Ljc3NGMyLjMxNiwtMi42NTggNS4wNDYsLTUuNTc0IDYuNDcyLC04LjY1N2MzLjAzOSwtNi41NzMgMS45MTQsLTE0LjMzIC0xLjQ1NiwtMjAuOGMtMTcuMjc5LC0zMy41NSAtMjAuMjMyLC03My43NDUgLTI2LjAzNywtMTEwLjY3NGMwLDAgLTAuNjc1LC01LjMyOSAtMS40NzcsLTkuOTIyYy04LjYwMiwtNDkuMzA5IC0zOS45NzEsLTk0LjM5MiAtODMuNDkxLC0xMTkuODQxYy0yNi4xNzMsLTE1LjMwNiAtNTYuMjg4LC0yMy40NjMgLTg2LjgyNCwtMjMuNTk5Yy0yMy45NDgsLTAuMDM3IC00Ny44OTYsLTAuMDAxIC03MS44NDMsLTAuMDAxYy0xLjYzNywwLjAwMyAtMy4yNzMsMC4wMyAtNC45MDgsMC4wODJsMCwzNS43MDVjLTAuMTY3LDcuMzIxIC0xMS42NzQsMTEuODE5IC0xNS45MTUsNC4wNzFjLTAuNDk1LC0wLjkwMyAtMC44MjIsLTEuODk2IC0wLjk2MywtMi45MTZjLTAuMDUyLC0wLjM4MiAtMC4wNywtMC43NjggLTAuMDc4LC0xLjE1NWwwLC0zNC4zMDNjLTQ4LjkwNSw2LjU0NyAtOTQuODI0LDM0LjM2OCAtMTIyLjUxNyw3NS44OGMtMzAuOTg4LDQ2LjQ1MSAtMzcuNjk1LDEwOC4zMTggLTE2LjU1LDE2MC43NzZjMTkuMDMxLDQ3LjIxMiA1OS44NjMsODUuMDU3IDEwOC4wNTksMTAwLjQ4M2MxLjc3NCwwLjU2OCAzLjU1OCwxLjEwMiA1LjM0OCwxLjYxN2wyNS42Niw5LjEwOGwwLC0zMi43OWMwLjAzMiwtMS40MjMgMC4xNjEsLTEuODUyIDAuNDI2LC0yLjY1N2MxLjA0OSwtMy4xNzcgNC4xMjQsLTUuNTczIDcuNDczLC01LjgwMmMwLjc0OCwtMC4wNTEgMC45MiwtMC4wMTEgMS4xNTcsMGMxLjQxNywwLjEzIDEuODM2LDAuMjg4IDIuNjIxLDAuNjA3YzIuODYsMS4xNjYgNC45NjEsMy45ODUgNS4yNDQsNy4wODFjMC4wMzEsMC4zNDEgMC4wMjcsMC40MjggMC4wMzUsMC43NzFsMCwzOC44MDlsMTc4LjM5Nyw2My4zMjJjNy41NjksMS4zNDggMTUuNDg4LDMuMjM1IDIyLjY4OSwxLjc3MWM2LjQ4NSwtMS4zMTggOS4yODEsLTkuMzUzIDExLjMwMSwtMTYuMzU4YzMuODMsLTEzLjE5OSA4LjMyMywtMjYuMjIgMTMuNjA1LC0zOC44NzhjLTEyLjU3NSwtMC43ODEgLTI0LjQyOSwtMy44NjEgLTM1LjMyNSwtMTBjLTYuMzczLC0zLjU5IC0xMC45NjYsLTguNjggLTYuNDUzLC0xMy45NzZjMS41ODcsLTEuODYzIDMuOTgsLTIuOTI0IDYuNDUzLC0yLjk4YzIwLjE2MiwxMC41ODQgMzQuNDA1LDEzLjgwNSA0Mi45OTksMTBabS00MTUuNDE3LC02LjI2NmMxMy45MTcsMC4xMzUgMjYuOTY3LDEwLjk3MyAyOS4zNywyNC44ODJjMi4yODQsMTMuMjE2IC01LjUwNiwyNy41MTYgLTE3Ljg4NSwzMi43NTljLTEzLjUwMyw1LjcyIC0zMC45MTYsLTAuMiAtMzguMDU2LC0xMy4zMzVjLTYuMDEyLC0xMS4wNiAtNC4wNDIsLTI1Ljg3MyA0LjY2LC0zNS4wMDFjNS42MTksLTUuODk0IDEzLjU5LC05LjMzNyAyMS45MTEsLTkuMzA1Wm0tMC4yODksMTUuMjk5Yy05Ljk0LDAuMDk2IC0xOC4wNTYsMTIuMTAyIC0xMi44NCwyMS43MDFjNC4yNDcsNy44MTQgMTYuMzA5LDEwLjAyMSAyMy4wMDcsMy43MDZjNC44OTgsLTQuNjE4IDUuOTc5LC0xMi43NTggMi40MTIsLTE4LjQ2OGMtMi42NDYsLTQuMjM0IC03LjQ2MSwtNi45NTkgLTEyLjU3OSwtNi45MzlabTE3My45MjQsLTI5MC40NDRjNDAuOTEsMC4xNzggODAuODQ3LDI0LjExOCA5OS44ODQsNjEuNTQyYzE4LjUzMSwzNi40MzEgMTUuMjQzLDgzLjAzOCAtOS4xOTEsMTE2Ljc0MWMtMjQuNTIxLDMzLjgyNCAtNjguOTAzLDUyLjI4NyAtMTEwLjkzNSw0NC43NjJjLTMzLjQyMiwtNS45ODMgLTYzLjQ3OCwtMjcuOTg1IC03OS40MjQsLTU3Ljk3NGMtMjEuOTk0LC00MS4zNjIgLTE1LjE4MywtOTYuNDg0IDE5LjEyNiwtMTMxLjQxN2MyMC43OTIsLTIxLjE3MSA1MC4xNTksLTMzLjUyNSA3OS44MTUsLTMzLjY1NGMwLjI0MiwwIDAuNDgzLDAgMC43MjUsMFptLTM4LjQ3NiwxNjIuNTA1bC0yMS4xNDYsMjEuMTQ1YzIwLjY1NSwxNi44NDYgNDguNDU4LDI1LjI0IDc1LjczMSwyMC4zNThjMTUuNzUyLC0yLjgyMSAzMC41MjUsLTEwLjAzMSA0Mi44MSwtMjAuMzM2bC0yMS4xMjcsLTIxLjEyN2MtMTcuMzg3LDEzLjA0MiAtNDEuNzE4LDE2LjY2NCAtNjIuMzM1LDguMDljLTQuOTg5LC0yLjA3NCAtOS42NjksLTQuODMgLTEzLjkzMywtOC4xM1ptLTMzLjM4OSwtMTA5LjYxN2MtOS43OTMsMTEuNzk0IC0xNi42OTEsMjUuOTk5IC0xOS43MjQsNDEuMDQ0Yy0zLjk1MSwxOS41OTcgLTEuNDE5LDQwLjQ2NiA3LjIyMSw1OC41MzhjMy4zNDMsNi45OSA3LjYwOSwxMy40NzMgMTIuNjEzLDE5LjMzM2wyMS4zNDUsLTIxLjM0NGMtNi40OTEsLTguNTIyIC0xMC45LC0xOC42MjggLTEyLjM4OCwtMjkuMjU2Yy0yLjMwMiwtMTYuNDUxIDIuMzczLC0zMy42NzcgMTIuMzExLC00Ni45MzdsLTIxLjM3OCwtMjEuMzc4Wm0xNDIuOTkxLDAuMDE0bC0yMS4zNywyMS4zNzFjMi4zNjgsMy4wNDQgNC40NTEsNi4zMTIgNi4xOTYsOS43NjljMTAuNTM1LDIwLjg3OCA4LjEzNSw0Ny40MTQgLTYuMTc4LDY2LjUwNWwyMS4xMzcsMjEuMTM3YzEwLjg0NSwtMTIuOTIyIDE4LjM3MiwtMjguNzQ1IDIwLjg0MywtNDUuOTc3YzMuNjg0LC0yNS42OTcgLTQuMTE0LC01Mi43NTEgLTIwLjYyOCwtNzIuODA1Wm0tNzEuNzg4LDEzLjQwOWMtMjEuMTQ1LDAuMjA1IC00MC45NDgsMTYuNDE0IC00NC45NjUsMzcuMzYyYy0yLjg5MiwxNS4wNzYgMi4zMzUsMzEuNDY3IDEzLjQ3Myw0Mi4wODRjMTIuNzk0LDEyLjE5NSAzMi44MTYsMTYuMTQ2IDQ5LjQ2MSw5LjIyMmMxNC43MDQsLTYuMTE2IDI1Ljc2MiwtMjAuMzU1IDI3Ljk3MywtMzYuMTI4YzIuNzMxLC0xOS40NzIgLTguNDY5LC00MC4wOTQgLTI2LjQzNCwtNDguMzU1Yy02LjEwMiwtMi44MDUgLTEyLjg3NSwtNC4yMDQgLTE5LjUwOCwtNC4xODVabTIyNy45MjMsNTguNzU2YzcuMjA0LC0wLjU5MiAxMS4yNzQsLTExLjUzMiAzLjUxOCwtMTUuOTVjLTAuMjM5LC0wLjEzNiAtMC40NzksLTAuMjcxIC0wLjcxOSwtMC40MDRjLTIwLjI2MSwtMTEuMTk5IC00Ni4zNzUsLTExLjA3MSAtNjYuNjkzLDAuMzljMCwwIC0zLjMwOSwxLjk2NyAtNC4yMTIsNS4yNTVjLTEuNzI2LDYuMjkxIDUuNzAzLDEzLjM5IDEyLjU3Miw5LjQ5N2MwLjE4MywtMC4xMDQgMC4zNjcsLTAuMjA2IDAuNTUyLC0wLjMwOGMxNS4yMjUsLTguMzE1IDM0Ljk5NSwtOC4zNTIgNTAuMjk2LDAuNDExYzAsMCAyLjU3NCwxLjE3MSA0LjY4NiwxLjEwOVptLTIyNy42MjMsLTI0LjIyN2M2LjM4LDAgMTEuNTYxLDUuMTggMTEuNTYxLDExLjU2MWMwLDYuMzgxIC01LjE4MSwxMS41NjEgLTExLjU2MSwxMS41NjFjLTYuMzgxLDAgLTExLjU2MiwtNS4xOCAtMTEuNTYyLC0xMS41NjFjMCwtNi4zODEgNS4xODEsLTExLjU2MSAxMS41NjIsLTExLjU2MVptODcuMTU0LC0xODYuMzlsLTIzLjc4NiwtMjMuNzg3Yy01MC4zMSwtNS41NTkgLTEwMi41NTQsLTEuMTU1IC0xNDguOTQxLDIwLjg5MmMtNDIuOTIsMjAuMzk5IC03Ny45MDEsNTYuMTkxIC05Ni45OTYsMTAwLjI4MWMtOC40OTUsMTkuNjE0IC0xMy45MTYsNDAuNTQ0IC0xNi41NjcsNjEuNzRsLTAuMDM0LDAuMjgzbDIwLjUzNywzMS4yNThjMC40MTQsLTM3LjA1IDExLjQxNCwtNzQuMDI4IDMyLjA3MSwtMTA0Ljk5NGMzNC43NTYsLTUyLjEgOTUuMjg4LC04NS4zODcgMTU5LjMxOSwtODUuNjkxYzI0LjE3NiwtMC4wNCA0OC4zNTIsLTAuMDM4IDcyLjUyOCwwYzAuNjIzLDAuMDAzIDEuMjQ2LDAuMDA4IDEuODY5LDAuMDE4Wm0tMjcuNjM4LDEyNi40NDRjLTE2LjMwMiwtMTMuNTEyIC0zNy4yOTgsLTIxLjMxMiAtNTguNjE1LC0yMS41NWMtMC40MDEsLTAuMDAzIC0wLjgwMiwtMC4wMDQgLTEuMjAzLC0wLjAwNGMtMjEuNDY0LDAuMDk0IC00Mi43NDksNy44ODIgLTU5LjIxOCwyMS41NTFsMjEuMzUsMjEuMzVjMTAuNzYsLTguMTUzIDI0LjEzNywtMTIuNzU0IDM3Ljc2NCwtMTIuODg2YzAuMjcsLTAuMDAxIDAuNTQxLC0wLjAwMSAwLjgxMiwwYzEzLjUxOSwwLjEzMSAyNi44MTcsNC45NCAzNy42MDQsMTMuMDQ1bDIxLjUwNiwtMjEuNTA2Wm0yMTQuMTcyLC0xNjkuNDYyYzE0LjYxNywwLjE0MSAyOC4wNjEsMTIuMTU4IDI5LjYzNiwyNi43NTdjMS4zNzYsMTIuNzU1IC02LjM3MiwyNS45ODUgLTE4LjMxOCwzMC45NTZjLTE1Ljk3LDYuNjQ1IC0zNi44MjQsLTMuNDYxIC00MC43ODcsLTIxLjEyNmMtMy44NTEsLTE3LjE2NiA5LjkxMywtMzYuMjkxIDI4Ljg5MSwtMzYuNTg2YzAuMTkyLC0wLjAwMSAwLjM4NSwtMC4wMDIgMC41NzgsLTAuMDAxWm0tMC4yODksMTUuMjk5Yy0xMC4wNiwwLjA5NyAtMTguMTczLDEyLjU2OCAtMTIuNjE4LDIyLjA4OGM0LjQ0OSw3LjYyNiAxNi4zODQsOS41MDIgMjIuOTE3LDMuMTk2YzcuOTg1LC03LjcwOCAzLjQ2MSwtMjUuMDc0IC0xMC4wMTEsLTI1LjI4M2MtMC4wOTYsLTAuMDAxIC0wLjE5MiwtMC4wMDEgLTAuMjg4LC0wLjAwMVoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1NTYsMCwwLDU1NiwyNDcsNTAwKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMGZmO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+'
}

export function getUserProfile(userName) {
  let defaultBase64 = getAvatarbase64()
  let profileImage
  try {
    profileImage = require(`../../assets/img/profiles/${userName}.jpg`)
  } catch (e) {
    profileImage = defaultBase64
  }
  return profileImage
}

export function getChartMainData(chartMainData, sideChartData) {
  for (let i = 0; i < chartMainData.length; i++) {
    chartMainData[i].url = getUserProfile(chartMainData[i].userName)
    chartMainData[i].dashArray = ''
    chartMainData[i].connectorLineColor = {
      red: 184,
      green: 180,
      blue: 180,
      alpha: 1,
    }
    chartMainData[i].connectorLineWidth = 2
    chartMainData[i].expanded = true
    chartMainData[i].nodeImage = {}
    chartMainData[i].width = 320
    chartMainData[i].height = 300
    chartMainData[i].borderRadius = 1
    chartMainData[i].borderWidth = 1
    chartMainData[i].nodeIcon = {
      icon: 'https://to.ly/1yZnX',
      size: 30,
    }
    chartMainData[i].borderColor = {red: 255, green: 255, blue: 255, alpha: 1}
    chartMainData[i].backgroundColor = {red: 255, green: 255, blue: 255, alpha: 1}
    chartMainData[i].template = ReactDOMServer.renderToString(
      <ChartCardTemplate item={chartMainData[i]} index={i} />
    )
    chartMainData[i].sideTemplate = ReactDOMServer.renderToString(
      <ChartCardTemplate item={sideChartData[i]} />
    )
    chartMainData[i].sideChartData = sideChartData[i]
  }

  return chartMainData
}

function formatTooltip(d) {
  let tooltipTemplate = ReactDOMServer.renderToString(<EmployeeProfilePopup employeeInfo={d} />)
  return tooltipTemplate
}

export function bindPopup(d) {
  if (document.getElementById('tooltip-chart_' + d.nodeId) === null) {
    let xAxis = 1
    let yAxis = 1
    let popupsCurrCount = document.getElementsByClassName('tooltip-chart').length
    let popupNewIndex = 1
    if (popupsCurrCount < 4) {
      if (popupsCurrCount > 0) popupNewIndex = popupsCurrCount + 1
    } else {
      //4th onwards
      let lastIndexPopUpValue = document
        .getElementsByClassName('tooltip-chart')
        [popupsCurrCount - 1].getAttribute('tooltip-chart-index')

      if (lastIndexPopUpValue === '4') popupNewIndex = 1
      else popupNewIndex = parseInt(lastIndexPopUpValue) + 1
    }
    switch (popupNewIndex) {
      case 1:
        yAxis = 17
        break
      case 2:
        yAxis = 38
        break
      case 3:
        yAxis = 59
        break
      case 4:
        yAxis = 80
        break
      default:
        yAxis = 17
        break
    }
    let tooltip = document.createElement('div')
    tooltip.id = 'tooltip-chart_' + d.nodeId
    tooltip.classList.add('tooltip-chart')
    tooltip.style.right = xAxis + '%'
    tooltip.style.top = yAxis + '%'
    tooltip.style.position = 'fixed'
    tooltip.style.visibility = 'visible'
    tooltip.setAttribute('tooltip-chart-Index', popupNewIndex)
    tooltip.innerHTML = formatTooltip(d)
    addPrintableDiv()
    document.getElementById('printable').appendChild(tooltip)
    removePrintableDiv()

    document
      .getElementById('tooltip-chart_' + d.nodeId)
      .getElementsByTagName('button')[0]
      .addEventListener('click', function (event) {
        tooltip.remove()
        removePrintableDiv()
      })
    document
      .getElementById('tooltip-chart_' + d.nodeId)
      .getElementsByTagName('img')[0]
      .addEventListener('error', function (event) {
        event.target.src = defaultImageSvg
        event.onerror = null
      })

    document
      .getElementById('tooltip-chart_' + d.nodeId)
      .getElementsByTagName('button')[1]
      .addEventListener('click', function callChartForSelectedOrginzation() {
        sessionStorage.setItem('chartEmail', d.workEmail)
        document.getElementById('hidden_triger').click()
        removePrintableDiv()
      })
  } else {
    let eleIndex = document
      .getElementById('tooltip-chart_' + d.nodeId)
      .getAttribute('tooltip-chart-index')
    let eles = [...document.querySelectorAll(`[tooltip-chart-index*='${eleIndex}']`)]
    eles.map((item) => {
      item.style.zIndex = '0'
    })
    let currentNode = document.getElementById('tooltip-chart_' + d.nodeId)
    currentNode.style.zIndex = 1
  }
  removePrintableDiv()
}

export function removePrintableDiv() {
  if (document.getElementsByClassName('tooltip-chart').length === 0) {
    let ele = document.getElementById('printable')
    if (ele != null) ele.remove() // ele.setAttribute('display', 'none')
  }
}

export function addPrintableDiv() {
  if (document.getElementById('printable') === null) {
    let ele = document.createElement('div')
    ele.id = 'printable'
    ele.style.right = '-13%'
    ele.style.width = '52rem'
    ele.style.height = '62rem'
    ele.style.position = 'absolute'
    document.getElementById('chartCard').appendChild(ele)
  }
}

export function getMaxNodesInDepth(treeData) {
  let arrDepths = []
  for (let i = 1; i < 10; i++)
    arrDepths.push(treeData.descendants().filter((z) => z.depth === i).length)
  let maxNodesinDepth = Math.max(...arrDepths)
  return maxNodesinDepth
}

export function render(component, props, targetNode) {
  var reactElement = React.createElement(component, props, null)
  ReactDOM.unmountComponentAtNode(targetNode)
  ReactDOM.render(reactElement, targetNode)
}
