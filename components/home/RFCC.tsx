import { IconFlame } from '@tabler/icons-react'
import React from 'react'

export default function RFCC() {
  return (
    <div className="flex items-center gap-12">

            <div className="">

                <div className="flex ">
                    <IconFlame color="#004A77" size={50} stroke={1.5} />
                    <p className="ml-3 text-[40px] font-semibold leading-none text-primary-950">14,000</p>
                </div>

                <p className="text-lg font-semibold text-primary-950">Barrels per stream day</p>
                <p className="text-center text-lg font-semibold text-primary-950">RFCC Capacity</p>

            </div>

            <div className="h-32 w-0.5 bg-black" />
        </div>
  )
}
