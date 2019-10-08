/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED202', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_TSS: {
      type: "IMAGE",
      allowNull: true
    },
    DTENVTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENVTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTENVDMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENVDMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTRECDMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRRECDMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED202'
  });
};
