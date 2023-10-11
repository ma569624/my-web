import React from 'react'
import { ProcessData } from '../ApiData'

const WorkingProcess = () => {
    return (
        <section>
            <div class="working-process pb-5 pt-5">
                <div class="container">
                    <div class="default-section-title default-section-title-middle">

                        <h3>How We Work</h3>
                        <p>Maximize performance, reliability & business efficiency with our cost effective development team.</p>
                    </div>
                    <div class="section-content">
                        <div class="row justify-content-center">
                            {
                                ProcessData.map((val) => (

                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div class="working-process-card-3">
                                            <span>{val.num}</span>
                                            <h6>{val.num}</h6>
                                            <h4>{val.title}</h4>
                                            <p>{val.desc}</p>

                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkingProcess