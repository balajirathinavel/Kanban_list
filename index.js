import React from 'react';
import ReactDOM from 'react-dom';


class InnerCard extends React.Component{
    render(){
    return(
        <div>
            {projectList.map((value, index) => {
                return(
                    <div  class="container-fluid pt-3">
                        <div class="items border border-light">
                            <div class="card draggable shadow-sm">
                                <div class="card-body p-2 ">
                                    <div class="card-title"></div>
                                        <div key={index}>{value.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    );
                })}
            </div>
        );
    }
}

class OuterCard extends React.Component{
        render(){
            return(
                <div>
                    {projectList.map((value, index) => {
                        return(
                            <div  class="container-fluid pt-3">
                                <div class="row flex-row flex-sm-nowrap py-3">
                                    <div class="col-sm-6 col-md-4 col-xl-3">
                                        <div class="card bg-light">
                                            <div class="card-body">
                                                <h6 class="card-title text-uppercase text-truncate py-2"><div key={index}>{value.name}</div></h6>
                                                <InnerCard/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );    
                    }
                )
            }
        </div>
    );    
}
}

const projectList = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
    },
    {
      name: 'Project 3',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum',
    },
  ];
  

ReactDOM.render(<OuterCard/>, document.getElementById('root'));
