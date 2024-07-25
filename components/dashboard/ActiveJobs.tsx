export default function ActiveJobs() {
  
  const data = [
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Rendering', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Analysis', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
    { jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light...', view: '👁️' },
  ];
  return <div>ActiveJobs



<div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">JOB ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">PROJECT ID</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">STAGE</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">SCENE/SHOT NAME</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">VIEW</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{row.jobId}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.projectId}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.stage}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.sceneShotName}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>;
}


    

