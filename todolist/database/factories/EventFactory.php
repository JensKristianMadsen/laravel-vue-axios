<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'start' => $this->faker->dateTimeBetween('2021-11-8', '2021-11-10'),
            'end' => $this->faker->dateTimeBetween('2021-11-10', '2021-11-14'),
        ];
    }
}
