'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode; // children 타입 정의
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // 초기 상태
      whileInView={{ opacity: 1, y: 0 }} // 뷰포트에 들어왔을 때 상태
      viewport={{ once: false, amount: 0.2 }} // 한 번만 실행, 요소의 20%가 보일 때 트리거
      transition={{ duration: 0.8, ease: 'easeOut' }} // 애니메이션 지속 시간과 속도
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
