import React from 'react';
import { t } from '@basepath/utils/appUtils';
import { GoHome } from './index';

export const NotFound = () => (<div>{ t('errors.notfound') } <GoHome /></div>);
