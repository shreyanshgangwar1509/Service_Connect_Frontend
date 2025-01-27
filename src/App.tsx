
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import AppRoutes from './Routes/AppRoutes';



export default function App() {

  const theme = createTheme ({
    colors: {
      'mine-shaft': [
      '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d',
      ],
  
    'bright-sun': [
    '#fffbeb',
      '#fff3c6',
      '#ffe588',
      '#ffd149',
      '#ffbd20',
      '#f99b07',
      '#dd7302',
      '#b75006',
      '#943c0c',
      '#7a330d',
      '#461902',
    ],
    }
  });

  return (   
      <MantineProvider defaultColorScheme="dark" theme={theme}>
      <AppRoutes>
      </AppRoutes> 
      </MantineProvider>
  )
}