const handleApiError = (error) => {
    return (
        error?.response?.data?.message || 
        error?.message ||
        "An error occured"
    )
}

export default handleApiError;