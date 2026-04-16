import { IconTank } from '@tabler/icons-react'
import React from 'react'

export default function CrudeStorage() {
    return (
        <div className="flex items-center gap-12">

            <div className="">

                <div className="flex ">
                    <IconTank color="#004A77" size={55} stroke={1.5} />
                    <p className="ml-3 text-[55px] font-semibold leading-none text-primary-950">1,925,348</p>
                </div>

                <p className="text-center text-lg font-semibold text-primary-950">Crude Storage</p>
                <p className="text-center text-lg font-semibold text-primary-950">BBL</p>

            </div>

            {/* <div className="h-32 w-0.5 bg-black ml-7" /> */}
        </div>
    )
}
