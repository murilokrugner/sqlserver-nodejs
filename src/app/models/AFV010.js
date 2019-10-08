/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFV010', {
    AFV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFV_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFV_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFV_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFV_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFV_FASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFV_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_DOCUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_GERSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_GERSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_GEROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_GERCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_GEREMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_CONFIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_RECEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_NFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_MOVBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_PREREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFV_APRPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFV_GRPUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'AFV010'
  });
};
