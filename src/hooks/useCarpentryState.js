import { useState, useEffect } from 'react';

import * as carpentryService from '../services/carpentryService';

const useCarpentryState = (carpentryId) => {
    const [carpentry, setCarpentry] = useState({});
   

    useEffect(() => {
        carpentryService.getOne(carpentryId)
            .then(carpentryResult => {
                setCarpentry(carpentryResult);
            })

    }, [carpentryId]);

    return [
        carpentry,
        setCarpentry
    ]
};

export default useCarpentryState;