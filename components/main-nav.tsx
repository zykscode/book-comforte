'use client';

import { useCycle } from 'framer-motion';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';
import LargeScreenMenu from './big-menutoggle';
import { MainNavItem } from '@/types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex justify-between md:w-full">
      <div className="flex items-center gap-4 self-center ">
        <LargeScreenMenu
          isClicked={isOpen}
          toggle={() => toggleOpen()}
          className="h-12 bg-yellow-400 w-12 md:block md:h-8 md:w-8 "
        />
        <Link className="hidden text-lg font-normal md:block " href={'/'}>
          Ashley Okoli
        </Link>
        <Link
          className="hidden text-lg font-normal md:block "
          href={'/contact'}
        >
          Contact
        </Link>
      </div>
 

     
    </div>
  );
}
