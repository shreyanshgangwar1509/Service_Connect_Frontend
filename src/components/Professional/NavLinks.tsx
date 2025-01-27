import { Link} from 'react-router-dom';
import { IconLayoutDashboard, IconHexagonPlus,IconCalendarCheck, IconHistory } from '@tabler/icons-react';

const Navlinks = () => {

    const links = [
        {name: 'DashBoard', url: '/DashBoard', icon:<IconLayoutDashboard stroke={2} />},
        {name: 'Add Service', url: '/ProfessionalLogin', icon:<IconHexagonPlus stroke={2} />},
        {name: 'Bookings', url: '/contact', icon: <IconCalendarCheck stroke={2} />},
        {name: 'History', url: '/about', icon: <IconHistory stroke={2} />},
        // {name: 'Customer', url: '/CustomerLogin'}
    ]


    return (
          <>
            {links.map((link,index) => 
               <Link  to = {link.url}>
                <div key = {index} className="flex gap-3 text-xl items-center p-4 hover:bg-bright-sun-900
                rounded-lg">
              
                  {link.icon} {link.name}
            </div></Link> 
           )
            }
        </>
        
    )
}

export default Navlinks;