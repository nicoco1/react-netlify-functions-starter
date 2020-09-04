import { createContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const UserContext = createContext<netlifyIdentity.User | undefined>(undefined);
