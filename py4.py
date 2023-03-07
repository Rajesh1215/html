from moviepy.editor import *

# Define the text to show on each frame
text = """Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10"""

# Split the text into individual lines
lines = text.split('\n')

# Define the duration of each frame
duration = 1  # in seconds

# Create a list of TextClip objects, one for each line of text
clips = [TextClip(line, fontsize=70, color='white', bg_color='black').set_duration(duration)
         for line in lines]

# Concatenate the clips into a single video
video = concatenate_videoclips(clips)

# Write the video to a file
video.write_videofile('output.mp4')