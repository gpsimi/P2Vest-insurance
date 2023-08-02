import React from 'react'
import CompanyLogo from './assets/logo/company-logo.svg'
import InsuranceLogo from './assets/logo/insurance-logo.svg'

 function Logo() {
    
        return <main>
            <img src={InsuranceLogo} alt="Logo SVG" />
            <img src={CompanyLogo} alt="Company SVG" />
        </main>
     
   
        
}

export default Logo

