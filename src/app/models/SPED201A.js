/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED201A', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    XML: {
      type: "IMAGE",
      allowNull: true
    },
    DTENVLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENVLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTRECLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRRECLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DESCRICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    STATSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DESCSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AMBIENTE: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    RESULTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    RESULTSEF: {
      type: "IMAGE",
      allowNull: true
    },
    UFURL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NDUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED201A'
  });
};
