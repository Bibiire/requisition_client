import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import pdfFile from '../../../assets/pdf/NIMCOGroupHRPolicyManual.pdf'
export const Policies = () => {

  const [defaultPdfFile] = useState(pdfFile);
  //Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="page-content">
     
      <h2 className='justify-content-center'>Nimco Group HR Policies</h2>
      <Tabs>
        <TabList>
          <Tab>HR Policies</Tab>
          <Tab>Vision and Mission</Tab>
        </TabList>

        <TabPanel>
          <h2>HR Policies</h2>
          <div className='pdf-container'>
          {/* show pdf conditionally (if we have one)  */}
          {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile}
              plugins={[defaultLayoutPluginInstance]} />
        </Worker></>}

        {/* if we dont have pdf or viewPdf state is null */}
        {!defaultPdfFile&&<>No pdf file selected</>}
      </div>
        </TabPanel>
        <TabPanel>
          {/* <h2>Any content 2</h2> */}
          <div className="mb-5">
                  <h6 className="card-title mb-1"> Our Vision</h6>
                  <p className="text-muted">
                    To Become a Global Brand in all our chosen line of Business
                    in Construction, Dredging, Piling, IT, Logistics and
                    Security, while delivering projects and services that
                    consistently meet client satisfaction and international
                    standard.
                  </p>
                </div>
                <div>
                  <h6 className="card-title mb-1"> Our Mission</h6>
                  <p className="text-muted">
                    To be a Value adding client to our numerous customers using
                    modern technology with a well-motivated workforce to impact
                    both our immediate environment and that of our customers.
                  </p>
                </div>
        </TabPanel>
      </Tabs>
   </div>
  )
}
export default Policies