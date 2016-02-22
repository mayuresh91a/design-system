/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Lorem from 'react-lorem-component';
import { prefix as pf } from 'app_modules/ui/util/component';
import Img from 'app_modules/ui/img';

const dialingIcon = (
  <span className={pf('icon_container icon-standard-call')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);
const image = (
  <span className={pf('avatar avatar--medium')}>
    <Img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
  </span>
);
const recordIcon = (
  <ButtonIcon
    flavor="icon-bare"
    iconFlavor="large"
    className={pf('icon-record')}
    sprite="utility"
    symbol="record"
    assistiveText="Stop Recording" />
);

export default (
  <div className="demo-only">
    {/*<div className={pf('docked-container')}>*/}

      <div className={pf('docked-composer grid grid--vertical nowrap is-open is-recording')}>

        {/* Composer Header */}
        <div className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
          <MediaObject figureLeft={dialingIcon} flavor="center">
            Lei Chan
          </MediaObject>
          <div className={pf('docked-composer__actions')}>
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="minimize_window"
              assistiveText="Minimize window" />
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="expand_alt"
              assistiveText="Expand Composer" />
            <ButtonIcon
              flavor="icon-bare,icon-inverse"
              sprite="utility"
              symbol="close"
              assistiveText="Close" />
          </div>
        </div>

        {/* Composer Body */}
        <div className={pf('docked-composer__body grow grid grid--vertical nowrap size--1-of-1')}>
          <div className={pf('docked-composer__lead grid grid--align-spread shrink-none')}>
            <MediaObject figureLeft={image}>
              <p className={pf('text-heading--medium')}>Lei Chan</p>
              <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
                <li className={pf('list__item')}>VP of Sales</li>
                <li className={pf('list__item ')}>Acme Corporation</li>
              </ul>
            </MediaObject>
            <MediaObject figureLeft={recordIcon} flavor="center">
              <p className={pf('text-heading--large')}>5:37</p>
            </MediaObject>
          </div>
          <div className={pf('docked-composer__toolbar shrink-none grid grid--align-spread')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-small"
              sprite="utility"
              symbol="unmuted"
              assistiveText="Mute Yourself" />
          </div>
          <label className={pf('assistive-text')} htmlFor="composer-text-input-1">Take notes</label>
          <textarea id="composer-text-input-1" className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
        </div>

        {/* Composer Footer */}
        <div className={pf('docked-composer__footer shrink-none')}>
          <div className={pf('float--right')}>
            <Button flavor="destructive">End Call</Button>
          </div>
        </div>
      </div>

    {/*</div>*/}
  </div>
);