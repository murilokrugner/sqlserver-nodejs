/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS0990', {
    CS0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS0_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS0_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS0_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS0_NUMLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS0_REVSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS0_REVCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS0_TPESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CS0_CONSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CS0_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CS0_UPDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS0_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS0_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS0_NATLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    CS0_TIPLIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CS0_ECDREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CS0_SITPER: {
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
    }
  }, {
    tableName: 'CS0990'
  });
};
