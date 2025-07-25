"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, TextField, Button, Typography, Paper, Link, Select, Checkbox, FormControlLabel } from '@mui/material';
import { TbLogin2 } from "react-icons/tb";
import { IoInfiniteSharp } from "react-icons/io5";
import CheckIcon from '@mui/icons-material/Check';
import ReportGmailerrorredTwoToneIcon from '@mui/icons-material/ReportGmailerrorredTwoTone';
import { Cairo } from 'next/font/google';

export default function LoginPage() {
  
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (userName !== 'admin' || password !== '1234') {
    setError(true);
  } else {
    setError(false);
    // continue to dashboard
  }
};

  const CustomCheckbox = () => (
  <Box
    sx={{
      width: 20,
      height: 20,
      borderRadius: '8px', // Slightly rounded
      border: '2px solid white',
      backgroundColor: 'transparent',
    }}
  />
);

  const CustomCheckedCheckbox = () => (
  <Box
    sx={{
      width: 20,
      height: 20,
      borderRadius: '8px',
       border: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CheckIcon sx={{ fontSize: 16, color: 'white' }} />
  </Box>
);


  return (
     <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/Background.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
      elevation={10}
      sx={{
      p: 4,
      width: 446,
      height:494,
      background:'hsla(0, 0%, 5%, 0.6)', // White fade gradient
      borderRadius: '1.5rem',
      backdropFilter: 'blur(8px)', // optional glow blur
      boxShadow: '0 0 20px rgba(0,0,0,0.6)',
       '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: '1px', // Border thickness
      borderRadius: "48px",
      background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
      }}
      >

     <Typography
     align="center"
     gutterBottom
     sx={{
    fontWeight:700,
    fontStyle:"bold",
    fontSize: '4rem',
    color: 'hsla(0, 0%, 100%, 1)',
    fontFamily: 'Cairo, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
     }}
     >
     v
    <Box
    component="span"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      top: '5px', // tweak this value if needed for vertical alignment
    }}
    >
    <svg width="75" height="36" viewBox="0 0 75 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55.6463 37.4416C49.7003 37.4416 44.2343 34.6676 40.649 29.8336C39.464 28.2354 39.8134 25.9809 41.4268 24.8081C42.0558 24.3524 42.7971 24.1093 43.5749 24.1093C44.7265 24.1093 45.8203 24.6562 46.5039 25.5768C48.7067 28.5484 52.0428 30.2498 55.6494 30.2498C61.9692 30.2498 67.1101 25.1606 67.1101 18.9016C67.1101 12.6425 61.9692 7.55329 55.6494 7.55329C51.341 7.55329 47.2848 9.82902 45.0637 13.4933L36.2738 28.0106C32.7493 33.826 26.311 37.4356 19.4655 37.4356C9.1412 37.4356 0.743164 29.1196 0.743164 18.8985C0.743164 8.67748 9.13815 0.370605 19.4625 0.370605C25.4511 0.370605 30.9202 3.15071 34.472 7.99385C35.6479 9.59811 35.2863 11.8495 33.6668 13.0132C33.0409 13.4629 32.3057 13.6999 31.537 13.6999C30.3763 13.6999 29.2764 13.1439 28.5958 12.2172C26.4264 9.25781 23.0964 7.55937 19.4625 7.55937C13.1427 7.55937 8.00181 12.6486 8.00181 18.9076C8.00181 25.1667 13.1427 30.2559 19.4625 30.2559C23.7709 30.2559 27.8271 27.9802 30.0482 24.3159L38.8321 9.80775C42.3596 3.98625 48.8009 0.373644 55.6463 0.373644C65.9707 0.373644 74.3687 8.68964 74.3687 18.9107C74.3687 29.1317 65.9707 37.4477 55.6463 37.4477V37.4416Z" fill="white"/>
    </svg>
    </Box>
    can
    </Typography>


         <form  className="flex flex-col gap-9"  onSubmit={handleSubmit}>
      {error && (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
    <ReportGmailerrorredTwoToneIcon sx={{ width:44, height:45, color: 'hsla(0, 84%, 60%, 1)' }} />
    <Typography color="hsla(0, 84%, 60%, 1)" fontWeight="cairo" sx={{ fontFamily: 'Cairo, sans-serif', fontWeight:500, fontSize:16, fontStyle:"Medium"}}>
      wrong username or password
    </Typography>
    </Box>
     )}
    <TextField
    placeholder="Username"
    error={error}
    variant="outlined"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    autoComplete="off"
    InputProps={{
    sx: {
      alignSelf:'center',
      width: 350,
      height:50,
      fontFamily: 'Cairo, sans-serif',
      fontStyle:"Medium",
      fontWeight:500,
      fontSize:12,
      borderRadius: '16px',
      padding: '17 : 24 :17 :24', 
      border: '1px solid transparent',
      color:"hsla(0, 0%, 20%, 0.6)",
      background: `
        hsla(0, 0%, 20%, 0.6)
    
      `,
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'border-box',
      backdropFilter: 'blur(15px)',
      boxShadow: '0px 4px 4px hsla(0, 0%, 0%, 0.25)',
      '& input': {
        color: 'white',
        padding: '12px',
        '::placeholder': {
          color: 'white',
          opacity: 0.7,
        },
      },
    },
   }}
   sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '16px', // Apply proper radius
      borderColor: error ? 'red' : '#666666', // Control border color directly
      borderWidth: '1px',
    },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#666666',
      },
     '&.Mui-focused': {
        outline: 'none !important',   // <-- Kills browser focus outline
        boxShadow: 'none !important', // <-- Kills boxShadow glow
      },
      '& input:focus': {
        outline: 'none !important',   // <-- Extra kill switch for input focus
        boxShadow: 'none !important', // <-- Remove box shadow focus ring
      },
   }}
  />
   <TextField
   placeholder="Password"
   error={error}
   variant="outlined"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   autoComplete="off"
   InputProps={{
    sx: {
      alignSelf:'center',
      width:350,
      height:50,
      fontFamily: 'Cairo, sans-serif',
      fontStyle:"Medium",
      fontWeight:500,
      fontSize:12,
      borderRadius: '16px',
      padding: 0,
      border: '1px solid transparent',
      background: `
       hsla(0, 0%, 20%, 0.6)
      `,
      color:"hsla(0, 0%, 20%, 0.6)",
      backgroundClip: 'padding-box, border-box',
      backgroundOrigin: 'border-box',
      backdropFilter: 'blur(15px)',
      boxShadow: '0px 4px 4px hsla(0, 0%, 0%, 0.25)',
      '& input': {
        color: 'white',
        padding: '12px',
        '::placeholder': {
          color: 'white',
          opacity: 0.7,
        },
      },
    },
    }}
    sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '16px', // Apply proper radius
      borderColor: error ? 'red' : '#666666', // Control border color directly
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#666666',
      },
     '&.Mui-focused': {
        outline: 'none !important',   // <-- Kills browser focus outline
        boxShadow: 'none !important', // <-- Kills boxShadow glow
      },
      '& input:focus': {
        outline: 'none !important',   // <-- Extra kill switch for input focus
        boxShadow: 'none !important', // <-- Remove box shadow focus ring
      },
      }}
      />
     
        <FormControlLabel
        control={<Checkbox
        icon={<CustomCheckbox />}
        checkedIcon={<CustomCheckedCheckbox />}
        sx={{ padding: 1, marginLeft:2.5,boxShadow:"hsla(0, 0%, 0%, 0.25)" }} // optional: remove extra padding
        />
 
}
        label="Remember me"
        sx={{ color: 'hsla(0, 0%, 100%, 1)',fontFamily:'Cairo, sans-serif',fontWeight:500, fontStyle:"Medium", fontSize:12 ,boxShadow:"hsla(0, 0%, 0%, 0.25)"}} // this sets the label text color to white
        />
          <Button
           type="submit"
           variant="outlined"
           sx={{
           width: 145,
           height: 49,
           alignSelf: 'center',
           paddingRight: '24px',
           paddingLeft: '24px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           gap: '10px',
           borderRadius: '14px',
           position: 'relative',
           zIndex: 1,
           background: `
           linear-gradient( to left, hsla(215, 11%, 29%, 0) ,hsla(217, 18%, 20%, 1))
          
           `,
          border: ' solid transparent',
          backgroundOrigin: 'border-box',
          backgroundClip: ' border-box',
          opacity: 1,
           '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: '1px', // Border thickness
      borderRadius: "12px",
      background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1),hsla(0, 0%, 0%, 0.2))',
       WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
          }}
          >
            <Typography sx={{ fontFamily: 'Cairo, sans-serif', color:"hsla(0, 0%, 100%, 1)"}}>LOGIN</Typography>
            {(TbLogin2 as any) ({size: 20, color: 'hsla(0, 0%, 100%, 1)', fontFamily:'Cairo, sans-serif',
           fontWeight:700,
           fontStyle:"bold",
           fontSize:24,})}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
