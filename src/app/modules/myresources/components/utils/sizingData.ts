export const sizingDataPara1 = {
    heading: "Sizing",
    createdBy: "Created by Asli Askan, last modified by Hakverdi, Aykut on Oct 04, 2021",
    firstHeading: "With the right sizing practice, we will achieve:",
    dataList: [
        "Successful Sprints, hitting delivery deadlines with Quality: What gets planned, gets delivered with no Bugs and no Production Incidents. Time saved by avoiding Rework on poorly defined and poorly analyzed work.",
        "Efficient resource deployment by rebalancing capacity across teams: A good understanding of future Complexity and Hours required for the product roadmap, allows HOEs to rebalance their staffing to hit targets.",
        "Performance analysis: A refined understanding on engineering performance with respect to complexity, contribution and hours spent on work done.",
    ]
}

export const table1Data = {
    firstHeading: "For sizing, we use both story point (SP) and time estimations, specifically:",
    dataList: [
        "While we use story point estimation for Epics, Feature Requests and User stories; we prefer Time estimation for Tasks and Subtasks.",
        "Story point estimation indicates the complexity of the items under discussion. Often times, it’s hard to identify the precise hours required to deliver a story, without breaking down into tasks. Therefore, we start with Story Point assignments and calculate velocity over time (which indicates a team’s ability to handle complexity – which is a good predictor of future sprints to come).",
        "For Stories selected for the Sprint, the scrum team breaks them down into tasks and developers come up with hour estimates. Afterwards, scrum team locks down the Sprint based on actual hours available for the team against the Sprint Demand.",
    ]
}

export const figure1Para = {
    paragraph: "We need to avoid the potential risks associated with using a dual estimation methodology (St. points and hourly estimates). Teams often estimate high complexity items as high time estimation and low complexity items as low time estimation, which is not always true. For example, a low complexity task may require high time commitment if the task is a time consuming task composed of steps which are very well defined and clearly known by the individual/team. So we will adopt a no-brainer complexity assignment practice to avoid such misconceptions."
}

export const figure2Para = {
    heading: "In grooming session first thing a team does is to give story points to user stories. If a  a story is more complex than 8 story points, scrum team will break it down in the Grooming sessions (so we don’t allow 16 SP complex stories in the Sprints). All stories are categorized and processed into complexity levels per the definition below.",
    dataList: [
        "1 SP: Min complexity (no additional effort is needed, user story is 'ready for development')",
        "2 SP: Need detailed analysis before moving to 'ready for development' state",
        "4 SP: Need meeting to discuss in details with  2+ people and decide on some milestones",
        "8 SP: Need Detailed Documentation like Functional Spec, Technical Spec Docs",
        "16 SP: Too big to handle: It should be divided into smaller user stories"
    ]
}

export const lastPara = {
    heading: "Required Changes in Current Practice",
    dataList1: ["Form 2 boxes of pizza Scrum Teams (that can do proper Dailies, Sprint Planning etc.)",
        "Compliance to new engineering rhythm.",
        "Update Workflows / processes  and set ground rules :"],
    dataList2: ["Time estimations will be populated from tasks",
        "Habit of breaking down too complex stories",
        " Habit of avoiding too complex stories from entering Sprints",
        "Habit of planning depending on previous sprint data and current backlog data ( velocity, sprint completion rate, team size, current sized and break downed  product backlog...)"],
}