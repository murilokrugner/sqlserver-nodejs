/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DC5010', {
    DC5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC5_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DC5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC5_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DC5_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_CATSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_DOCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_SEGPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_FUNEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DC5_TPSELE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_SEROPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DC5_TABSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DC5_TPTSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC5_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC5_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC5_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC5_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC5_TIPRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_TPEXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_UTSUBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_UTISDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    DC5_BLQLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_COFEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_LIBPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_BLQSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_MNTVOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_UPDEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_UPDPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_DISSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_MNTEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_BXESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_IMPETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC5_MLTATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DC5010'
  });
};
