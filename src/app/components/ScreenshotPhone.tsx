import type { CSSProperties } from 'react';

import todayEmptyImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.02.jpeg";
import daySeedPlanningImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.02__1_.jpeg";
import settingsStreakImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.03.jpeg";
import todayWithTasksImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.03__1_.jpeg";
import notificationsImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.03__2_.jpeg";
import archiveCalendarImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.04__1_.jpeg";
import settingsBottomImg from "../../imports/WhatsApp_Image_2026-07-18_at_22.00.04__2_.jpeg";

export {
  todayEmptyImg,
  daySeedPlanningImg,
  settingsStreakImg,
  todayWithTasksImg,
  notificationsImg,
  archiveCalendarImg,
  settingsBottomImg,
};

const sizes = {
  sm: { width: 155, height: 336, borderRadius: 28, padding: 7, innerRadius: 22 },
  md: { width: 195, height: 422, borderRadius: 34, padding: 9, innerRadius: 26 },
  lg: { width: 238, height: 515, borderRadius: 40, padding: 11, innerRadius: 30 },
};

interface ScreenshotPhoneProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

export function ScreenshotPhone({ src, alt = 'DaySeed app screenshot', size = 'md', style = {} }: ScreenshotPhoneProps) {
  const s = sizes[size];
  return (
    <div style={{
      width: s.width,
      height: s.height,
      background: 'linear-gradient(145deg, #2A2A28 0%, #1C1C1A 50%, #141412 100%)',
      borderRadius: s.borderRadius,
      padding: s.padding,
      boxShadow: '0 40px 80px rgba(0,0,0,0.38), 0 12px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)',
      flexShrink: 0,
      position: 'relative',
      ...style,
    }}>
      {/* Side button */}
      <div style={{ position: 'absolute', right: -3, top: '28%', width: 3, height: 52, backgroundColor: '#2A2A28', borderRadius: '0 2px 2px 0' }} />
      {/* Volume buttons */}
      <div style={{ position: 'absolute', left: -3, top: '20%', width: 3, height: 36, backgroundColor: '#2A2A28', borderRadius: '2px 0 0 2px' }} />
      <div style={{ position: 'absolute', left: -3, top: '33%', width: 3, height: 36, backgroundColor: '#2A2A28', borderRadius: '2px 0 0 2px' }} />

      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: s.innerRadius,
        overflow: 'hidden',
      }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      </div>
    </div>
  );
}
