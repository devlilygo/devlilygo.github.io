import { motion } from "framer-motion";

const SpinningLogo = () => {
  return (
    <div className="absolute top-10 transition-transform duration-300 hover:scale-110">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.1, // ⚡ 엄청 빠른 반응
          ease: "easeOut",
        }}
      >
        <motion.img
          src="/v3/logo-black.png"
          alt="Lily Go"
          className="w-full max-w-[100px] sm:max-w-[100px] md:max-w-[150px] h-auto"
          animate={{ rotateY: [0, 360] }} // 한 바퀴 돌고 원위치
          transition={{
            duration: 1, // 회전 애니메이션 시간 (1초)
            repeat: Infinity, // 무한 반복
            repeatDelay: 4, // 회전 끝나고 2초 쉬기 → 총 주기 3초
            ease: "easeInOut", // 자연스럽게 회전
          }}
          style={{ transformStyle: "preserve-3d" }} // 3D 회전 활성화
        />
      </motion.div>
    </div>
  );
};

export default SpinningLogo;
