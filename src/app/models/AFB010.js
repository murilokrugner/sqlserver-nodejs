/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFB010', {
    AFB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFB_TIPOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFB_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AFB_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFB_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFB_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFB_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFB_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFB_ACUMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFB_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFB_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFB_ALOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFB_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFB_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFB_FINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFB_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFB_COMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFB_PRODFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFB_DTAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'AFB010'
  });
};
