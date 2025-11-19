
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (role: UserRole, identifier: string) => void;
  logout: () => void;
  register: (details: Omit<User, 'id'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole, identifier: string) => {
    // Mock login logic
    console.log(`Logging in as ${role} with ${identifier}`);
    
    // Generate dynamic name from email/identifier if possible
    let firstName = 'Test';
    let lastName = 'User';
    
    if (identifier.includes('@')) {
        const namePart = identifier.split('@')[0];
        if (namePart.includes('.')) {
            firstName = namePart.split('.')[0];
            lastName = namePart.split('.')[1];
            // Capitalize
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        } else {
            firstName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
            lastName = 'User';
        }
    }

    const mockUser: User = {
      id: '123',
      firstName: firstName,
      lastName: lastName,
      email: identifier.includes('@') ? identifier : `${identifier}@example.com`,
      role,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (details: Omit<User, 'id'>) => {
    // Mock registration logic
    console.log('Registering user:', details);
    const newUser: User = {
      id: Date.now().toString(),
      ...details,
    };
    setUser(newUser);
  };

  return React.createElement(
    AuthContext.Provider,
    { value: { user, login, logout, register } },
    children
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
