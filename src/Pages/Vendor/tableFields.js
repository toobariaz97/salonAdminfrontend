
export const bookingField = [
    {
        key: "users",
        label: "Name",
        format: value => value?.name
    },
    {
        key: "service",
        label: "Service",
        format: value => value?.serviceName
    },
    {
        key: "events",
        label: "Event Type",
        format: value => value?.eventType
    },
    {
        key: "createdAt",
        label: "Date"
    },
    {
        key: "price",
        label: "price"
    },
    {
        key: "Status",
        label: "status"
    }
]
export const servicesFields = [

    {
        key: "serviceName",
        label: "Service",
        format:value=>value?.serviceName
    },
    {
        key: "service_name",
        label: "Service Name",
    },
    {
        key: "price",
        label: "Amount"
    },
   
    {
        key: "Status",
        label: "status",
        format:value=>{
            if(value) return "Active"
            return "InActive"
        }
    }
]
