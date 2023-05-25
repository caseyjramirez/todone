package com.example.todone.model;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TaskTest {

    Task task = new Task();

    @Nested
    @DisplayName("Task Model Getters and Setters")
    class TaskGettersAndSetters {

        @Test
        void testGetId() {
//            given
            Long expectedId = 1L;
            task.setId(expectedId);

//            when
            Long actualId = task.getId();

//            then
            assertEquals(expectedId, actualId);
        }

        @Test
        void testGetName() {
//            given
            String expectedName = "test name";
            task.setName(expectedName);

//            when
            String actualName = task.getName();

//            then
            assertEquals(expectedName, actualName);
        }

        @Test
        void testGetDescription() {
//            given
            String expectedDescription = "test description";
            task.setDescription(expectedDescription);

//            when
            String actualDescription = task.getDescription();

//            then
            assertEquals(expectedDescription, actualDescription);
        }
    }
}
