import { IconTank } from '@tabler/icons-react'
import React from 'react'

export default function CrudeStorage() {
    return (
        <div className="flex">

            <div className="">

                <div className="flex ">
                    <IconTank color="#004A77" size={50} stroke={1.5} />
                    <p className="text-[32px] font-semibold ml-3 text-primary-950">1,925,348</p>
                </div>

                <p className="text-primary-950 font-semibold text-center">Crude Storage</p>
                <p className="text-primary-950 text-center font-semibold">BBL</p>

            </div>

            {/* <div className="h-32 w-0.5 bg-black ml-7" /> */}
        </div>
    )
}
