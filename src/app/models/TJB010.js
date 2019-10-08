/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TJB010', {
    TJB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TJB_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TJB_MEDCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TJB_RISCOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TJB_CARACT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TJB_PRCATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TJB_ESTOCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TJB_DESCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TJB_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TJB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TJB_CONSUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TJB_RISSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_CARSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_PRCSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_ESTSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_DESSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_MDESCA: {
      type: "IMAGE",
      allowNull: true
    },
    TJB_TRASYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TJB_LOCSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'TJB010'
  });
};
