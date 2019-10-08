/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSE010', {
    CSE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSE_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSE_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSE_CODAGL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSE_TPDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CSE_INDVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    CSE_VLRINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_INDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_VLRFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_INDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_INDSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSE_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSE_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSE_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSE_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CSE_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSE_FUNVLR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_FUNINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_FUNFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSE_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CSE010'
  });
};
