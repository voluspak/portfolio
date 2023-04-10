import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { projects } from '../services/constants'
import style from '../styles/iconStyles.module.css'

export default function ProjectCard () {
  return projects.map(project => {
    const { name, img, description, link, relatedIcons } = project
    return (
      <Card sx={{ maxWidth: 345 }} key={name}>
        <CardActionArea href={link} target='_blank'>
          <CardMedia
            component='img'
            height='140'
            image={img[0]}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h5'>
              {name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
            <Typography variant='h6' component='h6'>
              Stack tecnológico
            </Typography>
            <span className={style.languageIconsContainer}>
              {relatedIcons.map(icon => (
                <div
                  key={icon.language}
                  className={style.iconContainer}
                >
                  <div>{icon.component}</div>
                  <span>{icon.language}</span>
                </div>
              ))}
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  })
}
