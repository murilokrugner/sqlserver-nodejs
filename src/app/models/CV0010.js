/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CV0010', {
    CV0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV0_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CV0_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CV0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CV0_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CV0_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CV0_NORMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CV0_BLOQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CV0_DTIBLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV0_DTFBLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV0_DTIEXI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV0_DTFEXI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CV0_CFGLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CV0_LUCPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CV0_PONTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    CV0_ENTSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CV0_ECVM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CV0_ECRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'CV0010'
  });
};
