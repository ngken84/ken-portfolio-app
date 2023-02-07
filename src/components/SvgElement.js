import React from 'react';

import {ReactComponent as FileText} from '../img/SVG/file-text2.svg';
import {ReactComponent as Embed2} from '../img/SVG/embed2.svg';
import {ReactComponent as Images} from '../img/SVG/images.svg';
import {ReactComponent as Lamp} from '../img/SVG/lamp1.svg';
import {ReactComponent as ListSvg} from '../img/SVG/list.svg';
import {ReactComponent as Menu} from '../img/SVG/menu.svg';
import {ReactComponent as UserTie} from '../img/SVG/user-tie.svg';
import {ReactComponent as Presentation} from '../img/SVG/presentation.svg';

const SvgElement = ({svgName, defaultSvg}) => {

    const getSvgElement = (name) => {
        switch(name) {
            case 'presentation':
                return (<Presentation/>);
            case 'embed':
                return (<Embed2/>);
            case 'list':
                return (<ListSvg/>);
            case 'user':
                return (<UserTie/>);
            case 'images':
                return (<Images/>);
            case 'lamp':
                return (<Lamp/>);
            case 'menu':
                return (<Menu/>);
            default:
                return (<FileText/>);


        }
    }

    return (
        <>
            {svgName && getSvgElement(svgName)}
            {!svgName && defaultSvg && getSvgElement(defaultSvg)}
        </>
    )
}

export default SvgElement;