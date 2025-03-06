"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationsColumn({ integrations, className }) {
    return (
        <motion.div animate={{
            y:"50%",
        }} transition={{
            duration:10,
            repeat:Infinity,
            ease:"linear",
        }}
        className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {Array.from({length:2}).map((_,i) => (
    <Fragment key={i}>
        {integrations.map((integration) => (
            <div
                key={integration.name}
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
                <div className="flex justify-center">
                    <integration.icon className="h-24 w-24" />
                </div>
                <div className="text-3xl text-center mt-6">{integration.name}</div>
                <div className="text-center text-white/50 mt-2">
                    {integration.description}
                </div>
            </div>
        ))}
    </Fragment>
))}
            
        </motion.div>
    );
}
