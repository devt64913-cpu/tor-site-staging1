import { IconSettings } from '@tabler/icons-react'
import React from 'react'

export default function CDU() {
    return (
        <div className="flex items-center gap-12">

            <div className="">

                <div className="flex ">
                    <IconSettings color="#004A77" size={55} stroke={1.5} />
                    <p className="ml-3 text-[55px] font-semibold leading-none text-primary-950">45,000</p>
                </div>

                <p className="text-lg font-semibold text-primary-950 text-center ml-16">Barrels per stream day</p>
                <p className="text-center text-lg font-semibold text-primary-950 ml-16">CDU Capacity</p>

            </div>

            <div className="h-32 w-0.5 bg-black" />
        </div>
    )
}
