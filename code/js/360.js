// Disable right-click context menu for a cleaner user experience
document.oncontextmenu = document.body.oncontextmenu = function() { return false; };

// Initialize Pannellum viewer for 'Hikarigaoka'
const viewerHikarigaoka = pannellum.viewer('Hikarigaoka', {
    "default": {
        "firstScene": "field",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "showFullscreenCtrl": true,
        "showSceneName": false, // hides pannellum's default scene title display
        "crossOrigin": "anonymous",
        "showAbout": false // Removed the "About Pannellum" text from the bottom right
    },
    "scenes": {
        "1fclass": {
            "title": "First Floor Classroom",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_L1RoomR.jpeg",
            "hotSpots": [
                {"pitch": 0,"yaw": 110,"type": "scene","text": "Cafeteria (1F)","sceneId": "cafeteria"},
                {"pitch": 0,"yaw": -110,"type": "scene","text": "Library (1F)","sceneId": "library"}
            ]
        },
        "2fclass": {
            "title": "Second Floor Classroom",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_L2RoomR.jpg",
            "hotSpots": [
                {"pitch": -12,"yaw": -23,"type": "scene","text": "East Library ↓","sceneId": "library"}, // Downward arrow
                {"pitch": -3,"yaw": -151,"type": "scene","text": "Art Room (2F)","sceneId": "art"},
                {"pitch": 5,"yaw": -50,"type": "scene","text": "Third Floor Classroom ↑","sceneId": "3fclass"} // Upward arrow
            ]
        },
        "3fclass": {
            "title": "Third Floor Classroom",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_GlassWallRoom1R.jpeg",
            "hotSpots": [
                {"pitch": -15,"yaw": -115,"type": "scene","text": "Second Floor Classroom ↓","sceneId": "2fclass"}, // Downward arrow
                {"pitch": 5,"yaw": -122,"type": "scene","text": "Music Room (3F)","sceneId": "music"},
                {"pitch": -3,"yaw": 128,"type": "scene","text": "Science Room (3F)","sceneId": "science"}
            ]
        },
        "art": {
            "title": "Art Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_ArtroomR.jpg",
            "hotSpots": [
                {"pitch": -3,"yaw": 155,"type": "scene","text": "Second Floor Classroom (2F)","sceneId": "2fclass"}
            ]
        },
        "cafeteria": {
            "title": "Cafeteria",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_Cafeteria1R.jpg",
            "hotSpots": [
                {"pitch": -5,"yaw": -18,"type": "scene","text": "Soccer Field","sceneId": "field"},
                {"pitch": -2,"yaw": -127,"type": "scene","text": "First Floor Classrooms (1F)","sceneId": "1fclass"},
                {"pitch": 0, "yaw": -250, "type": "scene", "text": "Second Floor Classroom ↑", "sceneId": "2fclass"} // Yaw adjusted to -250
            ]
        },
        "field": {
            "title": "Soccer Field",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_SoccerFieldR.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -90,"type": "scene","text": "Gym","sceneId": "gym"},
                {"pitch": 0,"yaw": 60,"type": "scene","text": "Library (1F)","sceneId": "library"},
                {"pitch": 0, "yaw": -15, "type": "scene", "text": "Cafeteria", "sceneId": "cafeteria"}
            ]
        },
        "gym": {
            "title": "Gymnasium",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_GymR.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -90,"type": "scene","text": "Soccer Field","sceneId": "field"}
            ]
        },
        "kindergarten": {
            "title": "Kindergarten Classroom",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_KinderR.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -50,"type": "scene","text": "Soccer Field","sceneId": "field"},
                {"pitch": 0,"yaw": 16,"type": "scene","text": "Library (1F)","sceneId": "library"}
            ]
        },
        "library": {
            "title": "East Library",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_LibraryR.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -90,"type": "scene","text": "Soccer Field","sceneId": "field"},
                {"pitch": -8,"yaw": 140,"type": "scene","text": "Kindergarten Classroom","sceneId": "kindergarten"},
                {"pitch": -2,"yaw": 45,"type": "scene","text": "First Floor Classroom (1F)","sceneId": "1fclass"},
                {"pitch": 4,"yaw": 106,"type": "scene","text": "Second Floor Classroom ↑","sceneId": "2fclass"} // Upward arrow
            ]
        },
        "music": {
            "title": "Music Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_MusicRoom1R.jpg",
            "hotSpots": [
                {"pitch": -1,"yaw": 55,"type": "scene","text": "Third Floor Classroom (3F)","sceneId": "3fclass"},
                {"pitch": -24,"yaw": 47,"type": "scene","text": "Second Floor Classroom ↓","sceneId": "2fclass"} // Downward arrow
            ]
        },
        "science": {
            "title": "Science Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Hikarigaoka_ScienceRoom1R-1.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -50,"type": "scene","text": "Third Floor Classroom (3F)","sceneId": "3fclass"}
            ]
        }
    }
});

// Initialize Pannellum viewer for 'Bunkyo'
const viewerBunkyo = pannellum.viewer('Bunkyo', {
    "default": {
        "firstScene": "entrance",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "showFullscreenCtrl": true,
        "showSceneName": false,
        "crossOrigin": "anonymous",
        "showAbout": false // Removed the "About Pannellum" text from the bottom right
    },
    "scenes": {
        "entrance": {
            "title": "Entrance",
            "type": "equirectangular",
            "compass": true,
            "northOffset": 0,
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Bunkyo_Lobby_360.jpg",
            "hotSpots": [
                {"pitch": -10,"yaw": 72,"type": "scene","text": "Theater Room","sceneId": "theater"},
                {"pitch": 6,"yaw": 93,"type": "scene","text": "Cafeteria","sceneId": "cafeteria"},
                {"pitch": -10,"yaw": 119,"type": "scene","text": "Multimedia Room","sceneId": "multimedia"},
                {"pitch": -10,"yaw": -89,"type": "scene","text": "Second Floor Classroom ↑","sceneId": "2fclassroom"}, // Upward arrow
                // New hotspot for Music Room in Bunkyo Entrance
                {"pitch": -10,"yaw": -105,"type": "scene","text": "Music Room ↓", "sceneId": "music"} // Adjusted yaw and added downward arrow
            ]
        },
        "2fclassroom": {
            "title": "Second Floor Classroom",
            "type": "equirectangular",
            "panorama": "https://www.japaninternationalschool.com/wp-content/uploads/2024/07/Bunkyo_Classroom_360.jpg",
            "hotSpots": [
                {"pitch": 12,"yaw": -120,"type": "scene","text": "Science Classroom ↑","sceneId": "science"}, // Upward arrow
                {"pitch": -12,"yaw": -120,"type": "scene","text": "Entrance ↓","sceneId": "entrance"}, // Downward arrow
                // Adjusted position of Third Floor Classroom hotspot
                {"pitch": 10, "yaw": -90, "type": "scene", "text": "Third Floor Classroom ↑", "sceneId": "3fclassroom"} // Added upward arrow
            ]
        },
        "cafeteria": {
            "title": "Cafeteria",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Bunkyo_CafeteriaGalleryR-1.jpg",
            "hotSpots": [
                {"pitch": -10,"yaw": -62,"type": "scene","text": "Theater Room","sceneId": "theater"},
                {"pitch": 6,"yaw": -83,"type": "scene","text": "Entrance","sceneId": "entrance"},
                {"pitch": -10,"yaw": -109,"type": "scene","text": "Multimedia Room","sceneId": "multimedia"},
                {"pitch": -10,"yaw": 85,"type": "scene","text": "Music Room ↓","sceneId": "music"}, // Downward arrow
                {"pitch": 10,"yaw": 85,"type": "scene","text": "Second Floor Classroom ↑","sceneId": "2fclassroom"} // Upward arrow
            ]
        },
        "3fclassroom": {
            "title": "Third Floor Classroom",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Bunkyo_Room1R-1.jpg",
            "hotSpots": [
                {"pitch": 8,"yaw": 55,"type": "scene","text": "Art Room","sceneId": "art"},
                {"pitch": -12,"yaw": 140,"type": "scene","text": "Second Floor Classroom ↓","sceneId": "2fclassroom"}, // Downward arrow
                {"pitch": 12,"yaw": 140,"type": "scene","text": "Science Room","sceneId": "science"}
            ]
        },
        "theater": {
            "title": "Theater Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Bunkyo_Box_theatre2R-1.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -70,"type": "scene","text": "Entrance","sceneId": "entrance"},
                {"pitch": 0,"yaw": -155,"type": "scene","text": "Cafeteria","sceneId": "cafeteria"}
            ]
        },
        "multimedia": {
            "title": "Multimedia Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Bunkyo_Gallery_Room_360_v1.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -80,"type": "scene","text": "Cafeteria","sceneId": "cafeteria"},
                {"pitch": 0,"yaw": -115,"type": "scene","text": "Entrance","sceneId": "entrance"}
            ]
        },
        "art": {
            "title": "Art Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Bunkyo_Art_Room_360.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": 120,"type": "scene","text": "Third Floor Classroom","sceneId": "3fclassroom"}, // Adjusted yaw
                {"pitch": 0,"yaw": -150,"type": "scene","text": "Japanese Room", "sceneId": "japanese"} 
            ]
        },
        "music": {
            "title": "Music Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Bunkyo_Music_R.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": -130,"type": "scene","text": "Cafeteria ↑","sceneId": "cafeteria"}, // Upward arrow
                {"pitch": -10, "yaw": -60, "type": "scene", "text": "Entrance ↑", "sceneId": "entrance"} // Adjusted yaw and added upward arrow
            ]
        },
        "japanese": {
            "title": "Japanese Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Bunkyo_WashitsuR.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": 90,"type": "scene","text": "Art Room","sceneId": "art"}
            ]
        },
        "science": {
            "title": "Science Room",
            "type": "equirectangular",
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Bunkyo_Science_Room_360.jpg",
            "hotSpots": [
                {"pitch": 0,"yaw": 90,"type": "scene","text": "Third Floor Classroom","sceneId": "3fclassroom"}
            ]
        }
    }
});

// Initialize Pannellum viewer for 'Meguro'
const viewerMeguro = pannellum.viewer('Meguro', {
    "default": {
        "firstScene": "1F",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "showFullscreenCtrl": true,
        "showSceneName": false,
        "crossOrigin": "anonymous",
        "showAbout": false // Removed the "About Pannellum" text from the bottom right
    },
    "scenes": {
        "1F": {
            "title": "Meguro Level 1 Classroom",
            "type": "equirectangular",
            "compass": true,
            "northOffset": 0,
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Meguro_LargeRoom1R.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -150,
                    "type": "scene",
                    "text": "Meguro Level 2 Classroom ↑", // 1F to 2F is UP
                    "sceneId": "2F"
                }
            ]
        },
        "2F": {
            "title": "Meguro Level 2 Classroom",
            "type": "equirectangular",
            "compass": true,
            "northOffset": 0,
            "panorama": "https://aoba-japan-international-school.github.io/images/360/Aoba360_Meguro_Sunflower2R.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 23,
                    "type": "scene",
                    "text": "Meguro Level 1 Classroom ↓", // 2F to 1F is DOWN
                    "sceneId": "1F"
                }
            ]
        }
    }
});

// Function to hide the splash overlay for a given campus
function enterTour(campus) {
    const splash = document.getElementById(`splash-${campus}`);
    if (!splash) return;
    splash.style.display = 'none'; // Hide the splash screen
}

// Function to populate scene dropdown
function populateSceneSelector(viewer, selectorId, orderArray) {
    const selectorDiv = document.getElementById(selectorId);
    if (!selectorDiv) return;

    const select = selectorDiv.querySelector('select');
    const scenes = viewer.getConfig().scenes;
    // Clear existing options (if any)
    select.innerHTML = '';

    // Create an array of scene objects to sort
    const sortedScenes = Object.keys(scenes)
        .map(sceneId => ({ id: sceneId, title: scenes[sceneId].title || sceneId }))
        .sort((a, b) => {
            const indexA = orderArray.indexOf(a.title);
            const indexB = orderArray.indexOf(b.title);
            if (indexA === -1 && indexB === -1) return 0; // Both not in order, maintain current
            if (indexA === -1) return 1; // A not in order, B is
            if (indexB === -1) return -1; // B not in order, A is
            return indexA - indexB; // Sort by custom order
        });

    // Add sorted scenes as options
    sortedScenes.forEach(scene => {
        const option = document.createElement('option');
        option.value = scene.id;
        option.text = scene.title;
        select.appendChild(option);
    });

    // Set initial selection
    select.value = viewer.getScene();

    // On change, load the selected scene
    select.addEventListener('change', (e) => {
        const sceneId = e.target.value;
        viewer.loadScene(sceneId);
    });

    // Update dropdown when scene changes (to keep in sync with hotspot navigation)
    viewer.on('scenechange', () => {
        select.value = viewer.getScene();
    });
}

// Define the desired order for each campus
const bunkyoOrder = [
    "Music Room", "Entrance", "Theater Room", "Multimedia Room", "Cafeteria",
    "Second Floor Classroom", "Third Floor Classroom", "Science Room", "Art Room", "Japanese Room"
];
const hikarigaokaOrder = [
    "Soccer Field", "Gymnasium", "Cafeteria", "East Library",
    "Kindergarten Classroom", "First Floor Classroom", "Second Floor Classroom",
    "Art Room", "Third Floor Classroom", "Music Room", "Science Room"
];
const meguroOrder = [
    "Meguro Level 1 Classroom", "Meguro Level 2 Classroom"
];

// Initialize dropdowns with custom order
populateSceneSelector(viewerBunkyo, 'selector-bunkyo', bunkyoOrder);
populateSceneSelector(viewerHikarigaoka, 'selector-hikarigaoka', hikarigaokaOrder);
populateSceneSelector(viewerMeguro, 'selector-meguro', meguroOrder);