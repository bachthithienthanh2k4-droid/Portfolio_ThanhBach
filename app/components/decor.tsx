import { motion} from 'framer-motion';

export default function Decor() {
    return (
            <>
            <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[0%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[150px]" />
                </div>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ repeat: Infinity, duration: 8 }}
                        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-rose-200/50 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[150px]"
                    />
                </div>
            </>
    )
};
