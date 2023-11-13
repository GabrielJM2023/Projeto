"use client"

import { ReactNode } from 'react'
import NavBar from '@/components/NavBar/index'

interface NavBarProps {
    children: ReactNode
}

export default function NavBarMenu({ children }: NavBarProps) {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}