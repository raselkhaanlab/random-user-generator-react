import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const Controls = ({
  region,
  regions = [],
  onRegionChange,
  errors,
  onErrorsChange,
  seed,
  onSeedChange,
}) => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <Form.Group controlId="regionSelect">
            <Form.Label>Region</Form.Label>
            <Form.Select
              aria-label="select regions"
              value={region}
              onChange={(e) => onRegionChange(e.target.value)}
            >
              <option value=""> -- select region --</option>
              {regions.map((item, index) => (
                <option key={item + index} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="errorsSlider">
            <Form.Label>Errors per Record</Form.Label>
            <InputGroup>
              <Form.Control
                type="range"
                min="0"
                max="10"
                value={errors}
                onChange={(e) => onErrorsChange(e.target.value)}
              />
              <Form.Control
                type="number"
                min="0"
                max="1000"
                value={errors}
                onChange={(e) => onErrorsChange(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="seedInput">
            <Form.Label>Seed</Form.Label>
            <InputGroup>
              <Form.Control type="number" value={seed} readOnly />
              <Button variant="primary" onClick={onSeedChange}>
                Random
              </Button>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Controls;
