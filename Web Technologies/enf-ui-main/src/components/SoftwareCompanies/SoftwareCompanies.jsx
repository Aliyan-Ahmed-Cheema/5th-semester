import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import flag from '../../assets/images/countryFlag.png';

const SoftwareCompanies = () => {
  const initialData = [
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'System Design and Simulation, Financial Analysis, Monitoring, Site Analysis', languages: ['en', 'cn', 'vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['cn', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Financial Analysis', languages: ['vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['cn', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Financial Analysis, Monitoring', languages: ['en', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'System Design and Simulation, Financial Analysis, Monitoring, Site Analysis', languages: ['en', 'cn', 'vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['cn', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Financial Analysis', languages: ['vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['cn', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Financial Analysis, Monitoring', languages: ['en', 'ar'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['vn'] },
    { company: 'Xiamen Angels', region: 'China', softwareTypes: 'Monitoring', languages: ['en', 'cn'] },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const storedData = localStorage.getItem('companiesData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container mx-auto mt-20 mb-20">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-green-900 text-white">
            <th className="py-2 px-4 border-b text-left rounded-tl-xl" data-aos="fade-down">Index</th>
            <th className="py-2 px-4 border-b text-left" data-aos="fade-down">Company Name</th>
            <th className="py-2 px-4 border-b text-left" data-aos="fade-down">Region</th>
            <th className="py-2 px-4 border-b text-left" data-aos="fade-down">Software Types</th>
            <th className="py-2 px-4 border-b text-left rounded-tr-xl" data-aos="fade-down">Languages</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''} data-aos="fade-up">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{item.company}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center">
                  <img src={flag} alt={`${item.region} flag`} className="w-6 h-4 mr-2" />
                  {item.region}
                </div>
              </td>
              <td className="py-2 px-4 border-b">{item.softwareTypes}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex flex-wrap items-center">
                  {item.languages.map((lang, idx) => (
                    <span key={idx} className="mr-2">
                      <img src={flag} alt={`${lang} flag`} className="w-6 h-4 inline-block align-middle" />
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoftwareCompanies;
