// Discover what makes us Unique section


import { Grid } from '@mantine/core';

const Features = () => {

  const feature = [
    {
      name: '24/7 Support',
      icon: 'Support',
      description: "Get round-the-clock support tailored to your service needs. Whether it's a plumbing emergency or electrical troubleshooting, our team is available 24/7 to assist you promptly"
    },
    {
      name: 'Verified Professionals',
      icon: 'user',
      description: "Rest assured with our vetted professionals. Each expert on our platform undergoes thorough verification to ensure top-quality service for your peace of mind"
    },
    {
      name: 'Industry Partership',
      icon: 'handshake',
      description: "Benefit from our industry partnerships. We collaborate with trusted organizations to bring you access to a wider range of services and expertise, ensuring excellence in every aspect of your experience"
    },
    {
      name: 'Service Heading',
      icon: 'fast-delivery',
      description: "Experience swift service delivery tailored to your schedule. Our efficient team ensures timely completion without compromising quality. Experience lightning-fast service at your fingertips with our cutting-edge technology."
    },
    {
      name: 'Easy Refund & Cancellation',
      icon: 'save-money',
      description: "Seamless refund and cancellation procedures for your convenience. Rest assured, we've got you covered with our easy-to-use system. Simplify refunds and cancellations hassle-free."
    },
    {
      name: 'Affordability',
      icon: 'money',
      description: "Discover unbeatable affordability without compromise. Our transparent pricing, coupled with competitive rates, ensures you receive top-notch service without breaking the bank."
    },
  ];

  return (
    <div className="mt-24 mx-10">
      <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-6">
        Discover What <span className="text-bright-sun-500">Makes Us</span> Unique
      </div>

      <div className="text-lg text-mine-shaft-300 text-center w-7/12 mx-auto">
        <div>Simplify your home care with 24/7 support, affordable rates, and trusted experts</div>
        <div>All designed for your convenience</div>
      </div>

      <div className="my-8 mx-16">
        <Grid justify="center" grow gutter="xl">
          {
            feature.map((feature, index) => (
              <Grid.Col
              span={{  sm: 5, md: 4, lg: 3 }}
                key={index}
                className=" flex flex-col items-center justify-around border-bright-sun-300 rounded-xl hover:bg-bright-sun-950 hover:scale-105 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 border-2 w-96 mx-8 mt-8 gap-2 p-4 transition-all duration-500 group"
              >
               
                <div className="w-20 h-20 rounded-full bg-bright-sun-600 flex justify-center items-center">
                  <img className="w-10 h-10" src={`Features/${feature.icon}.png`} alt={feature.name} />
                </div>
                <div className="text-xl font-semibold text-center text-amber-300">{feature.name}</div>

                <div className="text-center text-mine-shaft-200 my-2">
                  {feature.description}
                </div>
              </Grid.Col>
            ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default Features;
