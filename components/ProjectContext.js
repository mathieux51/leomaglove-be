import React from "react"

import { projects } from "db"

let ProjectContext
const { Provider, Consumer } = (ProjectContext = React.createContext())

class ProjectProvider extends React.PureComponent {
  state = {
    projects
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { ProjectProvider, Consumer as ProjectConsumer, ProjectContext }
