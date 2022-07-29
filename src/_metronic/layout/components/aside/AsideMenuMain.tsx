/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {AsideMenuItemInNewTab} from './AsideMenuItemInNewTab'
import {UserContext} from '../../../../app/modules/context/UserContext'
import { Menu } from '../../../../app/modules/shared/Types/sharedITypes'

export function AsideMenuMain() {
  const [menuList, setMenuList] = useState([])
  const {componentRights}: any = React.useContext(UserContext)

  useEffect(() => {
    setMenuList(
      componentRights?.NAVIGATION_MENU?.props?.NAVIGATION_MENU?.filter(
        (f: any) => f.isActive === true
      )
    )
  }, [componentRights?.NAVIGATION_MENU?.props?.NAVIGATION_MENU])

  return (
    <>
      {menuList.length > 0 &&
        menuList
          .filter((f: Menu) => /*f.parentKey === null &&*/ f.isLandingPage === true)
          .map((homeMenu: Menu, parentIndex: number) => {
            return (
              <AsideMenuItem
                key={parentIndex}
                to={homeMenu.linkTo}
                icon='/media/icons/duotune/art/art002.svg'
                title='Home'
                //icon={homeMenu.icon}
                // title={homeMenu.title}
                fontIcon={homeMenu.fontIcon}
              />
            )
          })}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'></span>
        </div>
      </div>

      {menuList.length > 0 &&
        menuList
          .filter(
            (z: Menu) => z.parentKey === null && z.isLandingPage === false && z.title !== 'Home'
          )
          .sort((s: Menu) => s.sortOrder) //My resources
          .map((parentMenu: Menu, parentIndex: number) => {
            return (
              <AsideMenuItemWithSub
                key={parentIndex}
                to={parentMenu.linkTo}
                title={parentMenu.title}
                fontIcon={parentMenu.fontIcon}
                icon={parentMenu.icon}
              >
                {menuList
                  .filter((child: Menu) => child.parentKey === parentMenu.permissionKey)
                  .sort((s: Menu) => s.sortOrder) //Rolesin Acton
                  .map((childMenu: Menu, childIndex: number) => {
                    return childMenu.isNewTab === true ? (
                      <AsideMenuItemInNewTab
                        key={childIndex}
                        to={childMenu.linkTo}
                        title={childMenu.title}
                        icon={childMenu.icon}
                        hasBullet={childMenu.hasBullet}
                      />
                    ) : menuList.filter(
                        (x: Menu, childIndex: number) => x.parentKey === childMenu.permissionKey
                      ).length > 0 ? (
                      <AsideMenuItemWithSub
                        key={childIndex}
                        to={childMenu.linkTo}
                        title={childMenu.title}
                        fontIcon={childMenu.fontIcon}
                        icon={childMenu.icon}
                        hasBullet={childMenu.hasBullet}
                      >
                        {menuList
                          .filter(
                            (grandChild: Menu) => grandChild.parentKey === childMenu.permissionKey
                          )
                          .sort((s: Menu) => s.sortOrder)
                          .map((grandChildMenuItem: Menu, grandChildIndex: number) => {
                            return (
                              <AsideMenuItem
                                key={grandChildIndex}
                                to={grandChildMenuItem.linkTo}
                                title={grandChildMenuItem.title}
                                hasBullet={grandChildMenuItem.hasBullet}
                              ></AsideMenuItem>
                            )
                          })}
                      </AsideMenuItemWithSub>
                    ) : (
                      <AsideMenuItem
                        key={childIndex}
                        to={childMenu.linkTo}
                        title={childMenu.title}
                        fontIcon={childMenu.fontIcon}
                        icon={childMenu.icon}
                        hasBullet={childMenu.hasBullet}
                      />
                    )
                  })}
              </AsideMenuItemWithSub>
            )
          })}
    </>
  )
}
