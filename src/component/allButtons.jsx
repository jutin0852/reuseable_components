import React from "react";
import Button from "./button";

export default function AllButtons() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button variant="default" style={{ color: "black" }} type="">
        Default
      </Button>
      <Button variant="outline" type="variant='outline'">
        Default
      </Button>
      <Button variant="text" style={{ color: "#3d5afe" }} type="variant='text'">
        Default
      </Button>
      <Button disabled type="disabled">
        Disabled
      </Button>
      <Button variant="text" disabled type="variant='text' disabled">
        Disabled
      </Button>

      <Button
        variant="default"
        color="primary"
        startIcon="cart.png"
        type="startIcon='cart.png'"
      >
        Default
      </Button>
      <Button
        variant="default"
        color="primary"
        endIcon="cart.png"
        type="endIcon='cart.png'"
      >
        Default
      </Button>
      <Button variant="default" color="primary" size="sm" type="size='sm'">
        Default
      </Button>
      <Button variant="default" color="primary" size="md" type="size='md'">
        Default
      </Button>
      <Button variant="default" color="primary" size="lg" type="size='lg'">
        Default
      </Button>
      <Button
        variant="default"
        size="md"
        style={{ color: "black" }}
        type="color='default'"
      >
        Default
      </Button>
      <Button
        variant="default"
        color="primary"
        size="md"
        type="color='primary'"
      >
        Primary
      </Button>
      <Button
        variant="default"
        color="secondary"
        size="lg"
        type="color='secondary'"
      >
        Secondary
      </Button>
    </div>
  );
}
