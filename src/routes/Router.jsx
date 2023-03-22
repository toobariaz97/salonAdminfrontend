import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PR1 } from '../Pages/Account/PR1'
import { PR2 } from '../Pages/Account/PR2'
import { PR3 } from '../Pages/Account/PR3'
import { ChangePassword } from '../Pages/Auth/ChangePassword'
import { EditProfile } from '../Pages/Auth/EditProfile'
import { Login } from '../Pages/Auth/Login'
import { Profile } from '../Pages/Auth/Profile'
import { BookingDetails } from '../Pages/Bookings/BookingDetails'
import { BookingLog } from '../Pages/Bookings/BookingLog'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Listing } from '../Pages/Events/Listing'
import { Feedbacks } from '../Pages/Feedback/Feedbacks'
import { View } from '../Pages/Feedback/View'
import { Notifications } from '../Pages/Notifications/Notifications'
import { PaymentLog } from '../Pages/Payments/PaymentLog'
import { ServiceListing } from '../Pages/Services/ServiceListing'
import { UserListing } from '../Pages/Users/UserListing'
import { ViewUser } from '../Pages/Users/ViewUser'
import { VendorListing } from '../Pages/Vendor/VendorListing'
import { ViewVendor } from '../Pages/Vendor/ViewVendor'
import AuthGuard from './AuthGuard'
import PrivateRoutes from './PrivateRoute'

export const Router = () => {
  return (
    
<Routes>
    <Route path='/login' element={<AuthGuard><Login/></AuthGuard>} />
    <Route path='/profile' element={<PrivateRoutes><Profile/></PrivateRoutes>}></Route>
    <Route path='/edit-profile' element={<PrivateRoutes><EditProfile/></PrivateRoutes>}></Route>
    <Route path='/Change-password' element={<PrivateRoutes><ChangePassword/></PrivateRoutes>}></Route>


    <Route path='/verify-email' element={<AuthGuard><PR1/></AuthGuard>} />
    <Route path='/verify-code' element={<AuthGuard><PR2/></AuthGuard>} />
    <Route path='/password-reset' element={<AuthGuard><PR3/></AuthGuard>} />

    <Route path='/' element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
    <Route path='/users' element={<PrivateRoutes><UserListing/></PrivateRoutes>} />
    <Route path='/view-profile/:id' element={<PrivateRoutes><ViewUser/></PrivateRoutes>} />


    {/* //vendor */}
    <Route path='/vendor' element={<PrivateRoutes><VendorListing/></PrivateRoutes>}></Route>
    <Route path='vendor-detail/:id' element={<PrivateRoutes><ViewVendor/></PrivateRoutes>}></Route>


    

    <Route path='/event-management' element={<PrivateRoutes><Listing/></PrivateRoutes>}></Route>
    <Route path='/service-management' element={<PrivateRoutes><ServiceListing/></PrivateRoutes>}></Route>

    {/* booking log */}
    <Route path='/booking-logs' element={<PrivateRoutes><BookingLog/></PrivateRoutes>}></Route>
    <Route path='/booking-details/:id' element={<PrivateRoutes><BookingDetails/></PrivateRoutes>}></Route>
    
    <Route path='/payment-logs' element={<PrivateRoutes><PaymentLog/></PrivateRoutes>}></Route>


    <Route path='/feedback-management'element={<PrivateRoutes><Feedbacks/></PrivateRoutes>}></Route>
    <Route path='/feedback/:id'element={<PrivateRoutes><View/></PrivateRoutes>}></Route>

    <Route path='/notifications' element={<PrivateRoutes><Notifications/></PrivateRoutes>}/>
    



</Routes>


    )
}
