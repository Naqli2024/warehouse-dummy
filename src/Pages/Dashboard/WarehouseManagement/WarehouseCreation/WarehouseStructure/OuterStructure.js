import React, { useState } from 'react';
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";

const OuterStructure = () => {
      const [menuVisible, setMenuVisible] = useState(false);
      const [extendSpaceMenuVisible, setExtendSpaceMenuVisible] = useState(false);
      const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
      const [selectedEdge, setSelectedEdge] = useState("");
      const showCorners = selectedEdge === "Square" || selectedEdge === "Hexagon" || selectedEdge === "Round";
    
      const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const borderThreshold = 5; 
      
        const isOnBorder =
          e.clientX - rect.left <= borderThreshold || 
          rect.right - e.clientX <= borderThreshold || 
          e.clientY - rect.top <= borderThreshold || 
          rect.bottom - e.clientY <= borderThreshold; 
      
        if (isOnBorder) {
          setMenuVisible(true);
          setMenuPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          setMenuVisible(false);
        }
      };
      
      const handleOptionClick = (option: string): void => {
        setMenuVisible(false);
        console.log(`${option} clicked`);
      };

      const getBorderClass = () => {
        switch (selectedEdge) {
          case "Round":
            return "rounded-border";
          case "Square":
            return "square-border";
          case "Hexagon":
            return "hexagon-border";
          default:
            return "";
        }
      };
      

  return (
    <div>
          <div className="warehouse-structure-outer-content">
            <div className='warehouse-structure-wrapper'>
          <div className="warehouse-structure-inner-content" onClick={handleClick}>
          <p className="text-muted">Define The Outer structure of the Warehouse</p>
          {menuVisible && (
        <div className="context-menu" onClick={(e) => e.stopPropagation()} style={{ top: menuPosition.y, left: menuPosition.x }}>
          <div className="context-menu-item" onClick={() => handleOptionClick("Undo")}>Undo</div>
          <div className='warehouse-menu-divider'/>
          <div className="context-menu-item" onClick={() => setExtendSpaceMenuVisible(true)}>Extend Space</div>
          <div className='warehouse-menu-divider'/>
          <div className="context-menu-item" onClick={() => handleOptionClick("Subtract Space")}>Subtract Space</div>
          <div className='warehouse-menu-divider'/>
          <div className="context-menu-item" onClick={() => handleOptionClick("Redo")}>Redo</div>
        </div>
      )}
      {extendSpaceMenuVisible && (
        <div className="context-menu" onClick={(e) => e.stopPropagation()} style={{ top: menuPosition.y, left: menuPosition.x }}>
          <div className="context-menu-item" onClick={() => setExtendSpaceMenuVisible(false)}>Extend Space</div>
          <div className='warehouse-menu-divider'/>
          <div className="extend-space-menu-item">
            <div className='col-md-4 label-small'>Length</div>
            <div className='col-md-6'>
            <InputGroup className="mt-2 col-md-2">
            <Form.Control className="warehouse-menu-input"/> 
            </InputGroup>
            </div>
            </div>
            <div className="extend-space-menu-item">
            <div className='col-md-4 label-small'>Breadth</div>
            <div className='col-md-6'>
            <InputGroup className="mt-2 col-md-2">
            <Form.Control className="warehouse-menu-input"/> 
            </InputGroup>
            </div>
            </div>
            <div className="extend-space-menu-item">
            <div className='col-md-4 label-small'>Height</div>
            <div className='col-md-6'>
            <InputGroup className="mt-2 col-md-2">
            <Form.Control className="warehouse-menu-input"/> 
            </InputGroup>
            </div>
            </div>
            <div className="extend-space-menu-item">
        <div className="col-md-4 label-small">Edges</div>
        <div className="col-md-6">
          <InputGroup className="mt-2">
            <Form.Select onChange={(e) => setSelectedEdge(e.target.value)} className="warehouse-menu-input">
              <option value="">Select</option>
              <option>Round</option>
              <option>Square</option>
              <option>Hexagon</option>
            </Form.Select>
          </InputGroup>
        </div>
      </div>
      {showCorners && (
        <>
          <div className="extend-space-menu-item">
            <div className="col-md-4 label-small">Top R</div>
            <div className="col-md-6">
              <InputGroup className="mt-2 col-md-2">
                <Form.Control className={getBorderClass()} warehouse-menu-input/>
              </InputGroup>
            </div>
          </div>
          <div className="extend-space-menu-item">
            <div className="col-md-4 label-small">Top L</div>
            <div className="col-md-6">
              <InputGroup className="mt-2 col-md-2">
                <Form.Control className={getBorderClass()} warehouse-menu-input/>
              </InputGroup>
            </div>
          </div>
          <div className="extend-space-menu-item">
            <div className="col-md-4 label-small">Bottom L</div>
            <div className="col-md-6">
              <InputGroup className="mt-2 col-md-2">
                <Form.Control className={getBorderClass()} warehouse-menu-input/>
              </InputGroup>
            </div>
          </div>
          <div className="extend-space-menu-item">
            <div className="col-md-4 label-small">Bottom R</div>
            <div className="col-md-6">
              <InputGroup className="mt-2 col-md-2">
                <Form.Control className={getBorderClass()} warehouse-menu-input/>
              </InputGroup>
            </div>
          </div>
        </>
      )}
        </div>
      )}
          </div>
          <div className="dimension-horizontal">
            <InputGroup className="mt-2 col-md-2">
            <Form.Control className={getBorderClass()} warehouse-menu-input/> 
            </InputGroup>
            </div>
          <div className="dimension-vertical">
          <InputGroup className="mt-2 col-md-2">
            <Form.Control className={getBorderClass()} warehouse-menu-input/> 
            </InputGroup>
          </div>
        </div>  
        </div>  
    </div>
  )
}

export default OuterStructure